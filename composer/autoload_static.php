<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticIniteb8e4c8da278bef7a20af552c490f870
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticIniteb8e4c8da278bef7a20af552c490f870::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticIniteb8e4c8da278bef7a20af552c490f870::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
