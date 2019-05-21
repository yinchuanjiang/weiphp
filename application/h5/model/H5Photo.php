<?php
namespace app\h5\model;

use think\Model;

/**
 * 粉丝操作
 */
class H5Photo extends Model
{

    protected $table = DB_PREFIX . 'h5_photos';

    public function votes(){
        return $this->hasMany('H5PhotoVote','h5_photo_id');
    }
    public function user(){
        return $this->belongsTo('H5User','h5_user_id');
    }
}
