@servers(['web' => 'root@106.14.184.98'])

@task('deploy', ['on' => ['web'], 'parallel' => true])
cd /www/wwwroot/weiphp
{{--git pull origin {{ $branch }}--}}
{{--git reset --hard--}}
git pull origin master
{{--composer install --no-dev--}}
{{--php artisan migrate --force--}}
chown -R www:www /www/wwwroot/weiphp/
@endtask
