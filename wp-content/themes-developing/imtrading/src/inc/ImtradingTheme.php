<?php

class ImtradingTheme
{

//	private $navHeadAction;

    public function __construct()
    {
        $this->init();
        $this->postTypes();
        $this->actions();
        $this->hideAdminBar();
        $this->addImagesSizes();
    }

    public function init()
    {
        add_action('init', [$this, 'themeRegisterMenus']);
        add_action('widgets_init', [$this, 'themeLoadSidebars']);
		add_action('widgets_init', [$this, 'themeLoadWidgets']);
		add_action('init' , [$this, 'postThumbnails']);
		add_action('init', [$this, 'customLogo']);
        add_filter('upload_mimes', [$this, 'setMimeTypes']);
    }

    /**
     * Create Custom Posts
     */
    public function postTypes()
    {
//        $this->custom_post_type = new MyCustomPost();
    }

    /**
     * Create actions
     */
    public function actions()
    {
//        $this->navHeadAction = new NavHeadAction();
    }

    /**
     * Register Menus
     */
    public function themeRegisterMenus()
    {
        register_nav_menus(
            array(
                'menu-primary' => __('Menú Principal', 'imtrading-theme')
            )
        );
	}

	public function customLogo() {
		add_theme_support('custom-logo', array(
            'height' => 100,
            'width' => 100,
            'flex-height' => true,
            'flex-width' => true
        ));
	}

    /**
     * Hide admin bar in front
     */
    public function hideAdminBar() {
        show_admin_bar(false);
    }

    public function addImagesSizes() {

        add_image_size( 'thumbnail_380', 380 );
        add_image_size( 'thumbnail_480', 480 );

    }

	public function postThumbnails () {
		add_theme_support('post-thumbnails');
	}

    /**
     * Register Widgets
     */
    public function themeLoadSidebars()
    {
//        register_sidebar(array(
//            'name'          => __('Catálogos de Marcas', 'lbel'),
//            'id'            => 'lbel-catalog-brands',
//            'description'   => __('', 'lbel'),
//            'before_widget' => '',
//            'after_widget'  => '',
//            'before_title'  => '<h3 class="promoapp-title upper">',
//            'after_title'   => '</h3>',
//        ));
    }

    public function themeLoadWidgets() {
//        register_widget( 'LbelBrandsCatalogWidget' );
    }

    /**
     * Add support format svg upload image
     * @param $mimes
     * @return Array
     */
    public function setMimeTypes($mimes)
    {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }

	/**
	 * @return mixed
	 */
	public function getMenuTypeMetaBox()
	{
//		return $this->navHeadAction;
	}

    /**
     * @return mixed
     */
    public function getMyCustomPosts()
    {
//        return $this->custom_post_type;
    }
}
