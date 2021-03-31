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
define( 'DB_NAME', 'mysite' );

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
define( 'AUTH_KEY',         '-(Jw2bC$io PPuF@+O`-Bc3Zj2%:=y^MSb6[HiXrdg[|pZvgC&oq+v^/.GcHt(WJ' );
define( 'SECURE_AUTH_KEY',  'tzr_bcp+4|gZ!>@f?;rRCi_[FU,u?byRF=}%|>Jad(w_,vZ9T&|PV|vhZG5f9MhF' );
define( 'LOGGED_IN_KEY',    'aap#dK1olq+t=L^npo)Nb&JIucb!rw9CL_vRD#^#GQ}h bE35ZO5c9w*={zhw%_0' );
define( 'NONCE_KEY',        '!?z.H</:&fO/x-o0(Un:@v^P,V3`,x{SyaGH8PR^mZU=[/Qxl^gd*^hIkxTnGJs/' );
define( 'AUTH_SALT',        '6W%ATC`S?Lm2HXUm#OF;!(z:ID3&nnsYt0b`o6TF7K;sIP;CvP9zG;<^/2}HCFge' );
define( 'SECURE_AUTH_SALT', 'rHU:8fL, Gxkau#_lHAv16/ }o&PX5%`VN<LVJo()aVS1W/e~6M+ov~cC>j>/@ ;' );
define( 'LOGGED_IN_SALT',   ':BELk=Y|}%Y,iZ,smriTqPimga>#Lk6J gs5g0ITLE}KMpi?4ff1SGRpX+6cFuov' );
define( 'NONCE_SALT',       '5,=NB?]/R5V9TC0,J?7uB#PiP?gV0D/<x`^rO#)FYcAC(GGB8G%xDa!F>5xWEiXH' );

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
