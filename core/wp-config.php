<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp');

/** MySQL database username */
define('DB_USER', 'wp');

/** MySQL database password */
define('DB_PASSWORD', 'ft8623');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0:qh5OY+l2.E~mQ|P)F4pBybX@4):j7N#^.tvvp=_,u+^i?-Fl+~ l:ZgA,.f~@R');
define('SECURE_AUTH_KEY',  ']vh]e>C_I0,=J~3~4Igqz1s&](%?Ev4X& tQ%2wt-4nQ+)_-C2(`x-H#| 4KI}{P');
define('LOGGED_IN_KEY',    '-DmCg?G66-=q{Zv(?cBhJP{8?zjK%;B*|HgF<}4+16dEM(J=P<ZHh4j.DAGVn#!d');
define('NONCE_KEY',        'ioOlJlC((#m+3Ur#bQGxf=yg@D5P/ApN8S[6T7mwh$sc@-lRf01[0|=>%,(n;qyY');
define('AUTH_SALT',        '/I&|S^IgQuJWdeBzWAcd~vpOMh9dxV+LR0~Z|e-,Xu*yO7uj%_Do^tK-i{hMgn08');
define('SECURE_AUTH_SALT', 'w;k8%:XY.ahGU|?O3}l2Q~E+43`o]WC}V++qW_}THXU1$.*4MF|3z*tUQQXX$hVw');
define('LOGGED_IN_SALT',   '|fxO8n^*7Jc>Nk%vdLhC+!NH)6L8D6Cg8;3EN& :L.e/T2Zrb]>.;=+D()/*BT@[');
define('NONCE_SALT',       '+o KL6Mceg(@+;tI2r.;=<U}GCmC-X7V=$=)CL=a.Gf5&`g0d1=XGIqc-k#{X*|=');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
