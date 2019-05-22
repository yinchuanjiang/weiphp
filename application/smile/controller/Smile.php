<?php

namespace app\smile\controller;
use app\common\controller\WebBase;

//PC运营管理端的控制器
class Smile extends WebBase{

    var $syc_wechat = true;

    // 是否需要与微信端同步，目前只有认证的订阅号和认证的服务号可以同步
    function initialize()
    {
        parent::initialize();
        $this->syc_wechat = public_interface('user_group');

        $type = input('type/d', 0);
        $this->assign('type', $type);

        $res['title'] = '微笑大赛参赛列表';
        $res['url'] = U('smile/Smile/lists');
        $res['class'] = $type == 0 ? 'current' : '';
        $nav[] = $res;

        $res['title'] = '微笑大赛参赛作品列表';
        $res['url'] = U('smile/Smile/photos', array(
            'type' => 1
        ));
        $res['class'] = $type == 1 ? 'current' : '';
        $nav[] = $res;
        $this->assign('nav', $nav);
    }
    //微笑大赛列表
    public function lists($isAjax = 0)
    {
        $model = $this->getModel('user');
        $isAjax == 0 && $isAjax = I('isAjax');
        $this->assign('isAjax', $isAjax);

        $isRadio = I('isRadio');
        $this->assign('isRadio', $isRadio);

        // 解析列表规则
        $list_data = $this->_list_grid($model);

        $map['u.status'] = array(
            'gt',
            0
        );
        $map['f.pbid'] = get_pbid();

        // 搜索类型
        $search_type = input('search_type', 0);
        $this->assign('search_type', $search_type);

        $key = input('key');
        $this->assign('search_key', $key);
        if (! empty($key)) {
            $is_opneid = $search_type == 2 ? true : false;
            $uidstr = D('common/User')->searchUser($key, $is_opneid);
            if ($uidstr) {
                $map['u.uid'] = array(
                    'in',
                    $uidstr
                );
            } else {
                $map['u.uid'] = 0;
            }
        }

        $group_id = input('group_id/d', 0);
        $this->assign('group_id', $group_id);
        if ($group_id > 0) {
            $uids = M('auth_group_access')->where('group_id', $group_id)->column('uid');
            if (empty($uids)) {
                $map['f.uid'] = 0;
            } else {
                $map['f.uid'] = array(
                    'in',
                    $uids
                );
            }
        }

        $param = [];
        // 时间
        $s_time = input('s_time');
        $this->assign('s_time', $s_time);
        $s_time = strtotime($s_time);
        empty($s_time) && $s_time = 0;

        $e_time = input('e_time', '');
        $this->assign('e_time', $e_time);
        if ($e_time) {
            $e_time = strtotime($e_time);
        } else {
            $e_time = NOW_TIME;
        }
        if ($s_time || $e_time) {
            $map['reg_time'] = [
                'between',
                [
                    $s_time,
                    $e_time
                ]
            ];
        }

        // 标签
        $tag_id = input('tag_id', '');
        if ($tag_id) {
            $param['tag_id'] = $tag_id;
            $uidstr = D('common/User')->searchUserS($param);
            if ($uidstr) {
                $map['u.uid'] = array(
                    'in',
                    $uidstr
                );
            }
        }
        $this->assign('tag_id', $tag_id);

        // 性别
        $sex = input('sex', '');
        if ($sex) {
            $map['sex'] = $sex;
        }
        $this->assign('sex', $sex);

        $type = input('type/d', 0);
        $map['f.has_subscribe'] = 1 - $type;

        $row = empty($model['list_row']) ? 20 : $model['list_row'];
        $order = 'u.uid desc';
        // 读取模型数据列表

        $px = DB_PREFIX;
        $data = M('public_follow')->alias('f')
            ->join(DB_PREFIX . 'user u ', 'f.uid=u.uid')
            ->field('u.uid,f.openid')
            ->where(wp_where($map))
            ->order($order)
            ->paginate($row);
        $list_data = $this->parsePageData($data, $model, $list_data, false);

        foreach ($list_data['list_data'] as $k => $d) {
            $user = getUserInfo($d['uid']);
            $user['openid'] = $d['openid'];
            $user['group'] = isset($user['groups']) ? implode(', ', getSubByKey($user['groups'], 'title')) : '';
            $list_data['list_data'][$k] = array_merge($d, $user);
        }

        // 用户组
        $gmap['pbid'] = get_pbid();
        $auth_group = M('auth_group')->where(wp_where($gmap))->select();
        $this->assign('auth_group', $auth_group);

        $tagmap['pbid'] = get_pbid();
        $tags = M('user_tag')->where(wp_where($tagmap))->select();
        $this->assign('tags', $tags);

        $this->assign('syc_wechat', $this->syc_wechat);
        if ($this->syc_wechat) {
            $this->assign('normal_tips', '请定期手动点击“一键同步微信公众号粉丝”按钮同步微信数据');
        }
        $this->assign($list_data);
        if ($isAjax) {
            $this->assign('isRadio', $isRadio);
            return $this->fetch('lists_data');
        } else {
            return $this->fetch();
        }
    }

    //作品列表
    public function photos()
    {
        return $this->fetch();
    }
}
