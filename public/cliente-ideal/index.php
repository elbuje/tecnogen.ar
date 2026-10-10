<?php
if (function_exists('opcache_invalidate')) {
    @opcache_invalidate(__DIR__ . '/../../views/cliente-ideal.php', true);
    @opcache_invalidate(__FILE__, true);
}
require_once __DIR__ . "/../../includes/config.php";
require_once __DIR__ . "/../../includes/seo_helper.php";
require_once __DIR__ . "/../../views/cliente-ideal.php";
