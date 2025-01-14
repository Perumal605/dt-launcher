<?php
/**
 * @var string $tab
 */

use function DT\Home\namespace_string;

$nav = apply_filters( namespace_string( 'settings_tabs' ), [] );
?>

<div class="wrap">
    <h2><?php $this->esc_html_e( 'Home Screen', 'dt_home' ) ?></h2>

    <h2 class="nav-tab-wrapper">
		<?php foreach ( $nav as $index => $item ): ?>
            <a href="admin.php?page=dt_home&tab=<?php echo $this->e( $item['tab'] ) ?>"
               class="nav-tab <?php echo $this->esc_html( ( $tab == $item['tab'] || ! isset( $tab ) ) ? 'nav-tab-active' : '' ); ?>">
				<?php echo $this->e( $item['label'] ) ?>
            </a>
		<?php endforeach; ?>
    </h2>

    <div class="wrap">
        <div id="poststuff">


            <div id="post-body" class="metabox-holder columns-2">
                <div id="post-body-content">

					<?php if ( $error ?? '' ): ?>
                        <div class="notice notice-error is-dismissible">
                            <p>
								<?php $this->e( $error ) ?>
                            </p>
                        </div>
					<?php endif; ?>


					<?php echo $this->section( 'content' ) ?>

                    <!-- End Main Column -->
                </div><!-- end post-body-content -->
                <div id="postbox-container-1" class="postbox-container">
                    <!-- Right Column -->

					<?php echo $this->section( 'right' ) ?>
                    <!-- End Right Column -->
                </div><!-- postbox-container 1 -->
                <div id="postbox-container-2" class="postbox-container">
                </div><!-- postbox-container 2 -->
            </div><!-- post-body meta box container -->
        </div><!--poststuff end -->
    </div><!-- wrap end -->
</div>
