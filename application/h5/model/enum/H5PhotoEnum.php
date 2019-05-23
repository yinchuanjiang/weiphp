<?php
namespace app\h5\model\enum;


/**
 * 粉丝操作
 */
class H5PhotoEnum
{
    // 状态类别
    const CHECK_FAIL = -1; //审核失败
    const CHECK_SUCCESS = 1; //审核成功
    const CHECKING = 0;//待审核


    public static function getStatusName($status){
        switch ($status){
            case self::CHECK_FAIL:
                return '审核失败';
            case self::CHECK_SUCCESS:
                return '审核成功';
            case self::CHECKING:
                return '待审核';
            default:
                return '审核成功';
        }
    }
}
