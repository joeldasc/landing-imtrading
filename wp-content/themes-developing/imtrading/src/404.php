<?php

get_header();

?>

<section class="im__404">
	<div class="im__container">
		<h1 class="im__title">Error 404</h1>
		<p>
			No podemos redirigirte al contenido que estás buscando.
		</p>
		<a href="<?php echo esc_url( home_url() ); ?>" class="im__btn">Ir al inicio</a>
	</div>
</section>

<?php
get_footer();
?>
