<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'demo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&Vdz%|MeecWBcnA~~FPD;rf,Y2F}FrMAZ2*7knQf);sdEeV:zp_Lxu-Q6],`KHwt' );
define( 'SECURE_AUTH_KEY',  '1&bLo7Ng?9c8|^C|WTVr&eO%RG<9s8e@z 9H,&q4X9ftrrKToaJaq~9Hm!xYk;qT' );
define( 'LOGGED_IN_KEY',    '95;RwaaH;7EtJ`>V 5s%HqgEdNl?TlquUKFLL545V<Ii1;->$J=%3K*yl}8GJ/fh' );
define( 'NONCE_KEY',        'AI=ablR4{8$9[dYd9sErC_G<~^f%lmdE~O#EBG~{n7v6/G#V,dVP)Q9PglU773:V' );
define( 'AUTH_SALT',        'Y.I)M%&w5!)2XsGVh2|3SSaDKI_@VV!3Rnb@IpWxw}8x+XKsg%I7~36]4Eec,GAF' );
define( 'SECURE_AUTH_SALT', 'p`+VPa^4^4.`(S~_yP@F]0rzZBq~5U$JMw3dXq|ip#u9%1H82!iLq`IeNI9&q@lc' );
define( 'LOGGED_IN_SALT',   'GeOZW*fc&Wk;vv*i3_ZHOz8wh~qn7Uu)JuTY?18f4K ;fBfU=duYEY#3>K<5>:+!' );
define( 'NONCE_SALT',       'n2_B(_T}9{.kyy RuC2ALv2{s?/<pBYKf00s3V8uld%QH>/B2*v5LmW;zh!GiE e' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
