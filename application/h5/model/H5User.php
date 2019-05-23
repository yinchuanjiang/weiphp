<?php
namespace app\h5\model;

use app\h5\model\enum\H5PhotoEnum;
use think\Model;

/**
 * 粉丝操作
 */
class H5User extends Model
{

    protected $table = DB_PREFIX . 'h5_users';

    public function photo()
    {
        return $this->hasOne('H5Photo','h5_user_id')->where('cate','photo')->where('status',H5PhotoEnum::CHECK_SUCCESS);
    }

}
