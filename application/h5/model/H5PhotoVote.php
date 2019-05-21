<?php
namespace app\h5\model;

use think\Model;

/**
 * 粉丝操作
 */
class H5PhotoVote extends Model
{
    protected $table = DB_PREFIX . 'h5_photo_votes';

    //投票着
    public function voter()
    {
        return $this->belongsTo('H5User','vote_user_id');
    }
    //照片
    public function photo()
    {
        return $this->belongsTo('H5Photo','h5_photo_id');
    }
}
