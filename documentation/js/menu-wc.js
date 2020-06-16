'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">risnode-admin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-745759ed991abbb5e64c5ecf56065ce1"' : 'data-target="#xs-controllers-links-module-AppModule-745759ed991abbb5e64c5ecf56065ce1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-745759ed991abbb5e64c5ecf56065ce1"' :
                                            'id="xs-controllers-links-module-AppModule-745759ed991abbb5e64c5ecf56065ce1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleModule.html" data-type="entity-link">ArticleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' : 'data-target="#xs-controllers-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' :
                                            'id="xs-controllers-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' }>
                                            <li class="link">
                                                <a href="controllers/ArticleController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArticleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' : 'data-target="#xs-injectables-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' :
                                        'id="xs-injectables-links-module-ArticleModule-aa5e38e35c58bd6d13f7e3d1d4082d3c"' }>
                                        <li class="link">
                                            <a href="injectables/ArticleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ArticleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommentModule.html" data-type="entity-link">CommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CommentModule-acdde4d520571176e8eeea3006b20dbf"' : 'data-target="#xs-controllers-links-module-CommentModule-acdde4d520571176e8eeea3006b20dbf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CommentModule-acdde4d520571176e8eeea3006b20dbf"' :
                                            'id="xs-controllers-links-module-CommentModule-acdde4d520571176e8eeea3006b20dbf"' }>
                                            <li class="link">
                                                <a href="controllers/CommentController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommentController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CorporationModule.html" data-type="entity-link">CorporationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' : 'data-target="#xs-controllers-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' :
                                            'id="xs-controllers-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' }>
                                            <li class="link">
                                                <a href="controllers/CorporationController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CorporationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' : 'data-target="#xs-injectables-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' :
                                        'id="xs-injectables-links-module-CorporationModule-230d68e99336a3f6611643f44c484cf6"' }>
                                        <li class="link">
                                            <a href="injectables/CorporationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CorporationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ErrorlogModule.html" data-type="entity-link">ErrorlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' : 'data-target="#xs-controllers-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' :
                                            'id="xs-controllers-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' }>
                                            <li class="link">
                                                <a href="controllers/ErrorlogController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorlogController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' : 'data-target="#xs-injectables-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' :
                                        'id="xs-injectables-links-module-ErrorlogModule-c9ee5494a62f0c9d945492081c272342"' }>
                                        <li class="link">
                                            <a href="injectables/ErrorlogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ErrorlogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupModule.html" data-type="entity-link">GroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' : 'data-target="#xs-controllers-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' :
                                            'id="xs-controllers-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' }>
                                            <li class="link">
                                                <a href="controllers/GroupController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' : 'data-target="#xs-injectables-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' :
                                        'id="xs-injectables-links-module-GroupModule-c8707e15974332473139bf2cabd4dec5"' }>
                                        <li class="link">
                                            <a href="injectables/GroupService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListModule.html" data-type="entity-link">ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' : 'data-target="#xs-controllers-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' :
                                            'id="xs-controllers-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' }>
                                            <li class="link">
                                                <a href="controllers/ListController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' : 'data-target="#xs-injectables-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' :
                                        'id="xs-injectables-links-module-ListModule-93d49135d6d597f45514d3b91e0600e4"' }>
                                        <li class="link">
                                            <a href="injectables/ListService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ListService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MenuModule.html" data-type="entity-link">MenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' : 'data-target="#xs-controllers-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' :
                                            'id="xs-controllers-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' }>
                                            <li class="link">
                                                <a href="controllers/MenuController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' : 'data-target="#xs-injectables-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' :
                                        'id="xs-injectables-links-module-MenuModule-e6e4334a1497eda4c4c11215c7709a78"' }>
                                        <li class="link">
                                            <a href="injectables/MenuService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' : 'data-target="#xs-controllers-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' :
                                            'id="xs-controllers-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' : 'data-target="#xs-injectables-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' :
                                        'id="xs-injectables-links-module-ProfileModule-96c6386c652c69deca759a35cf03c4bc"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link">RoleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' : 'data-target="#xs-controllers-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' :
                                            'id="xs-controllers-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' }>
                                            <li class="link">
                                                <a href="controllers/RoleController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' : 'data-target="#xs-injectables-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' :
                                        'id="xs-injectables-links-module-RoleModule-2fd14575042f69ed4ff17bac9d9c1335"' }>
                                        <li class="link">
                                            <a href="injectables/RoleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RoleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteModule.html" data-type="entity-link">SiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' : 'data-target="#xs-controllers-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' :
                                            'id="xs-controllers-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' }>
                                            <li class="link">
                                                <a href="controllers/SiteController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' : 'data-target="#xs-injectables-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' :
                                        'id="xs-injectables-links-module-SiteModule-7cd2fbec9f3bff95347e836b03e68c33"' }>
                                        <li class="link">
                                            <a href="injectables/SiteService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SqldirectModule.html" data-type="entity-link">SqldirectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' : 'data-target="#xs-controllers-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' :
                                            'id="xs-controllers-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' }>
                                            <li class="link">
                                                <a href="controllers/SqldirectController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SqldirectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' : 'data-target="#xs-injectables-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' :
                                        'id="xs-injectables-links-module-SqldirectModule-858a3dc89f3961f53a3ab5ce50d95a9d"' }>
                                        <li class="link">
                                            <a href="injectables/SqldirectService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SqldirectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link">TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' : 'data-target="#xs-controllers-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' :
                                            'id="xs-controllers-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' }>
                                            <li class="link">
                                                <a href="controllers/TagController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' : 'data-target="#xs-injectables-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' :
                                        'id="xs-injectables-links-module-TagModule-9cddf75d99a3452aba204a4b0a1ff7d2"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' : 'data-target="#xs-controllers-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' :
                                            'id="xs-controllers-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' : 'data-target="#xs-injectables-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' :
                                        'id="xs-injectables-links-module-UserModule-74458a28d0fa0f01ee339b0c972e7563"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link">ViewModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ViewModule-0e4ffd76bf7efe3a1938fa5b48711526"' : 'data-target="#xs-injectables-links-module-ViewModule-0e4ffd76bf7efe3a1938fa5b48711526"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ViewModule-0e4ffd76bf7efe3a1938fa5b48711526"' :
                                        'id="xs-injectables-links-module-ViewModule-0e4ffd76bf7efe3a1938fa5b48711526"' }>
                                        <li class="link">
                                            <a href="injectables/ViewService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ViewService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ArticleController.html" data-type="entity-link">ArticleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CommentController.html" data-type="entity-link">CommentController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CorporationController.html" data-type="entity-link">CorporationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ErrorlogController.html" data-type="entity-link">ErrorlogController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GroupController.html" data-type="entity-link">GroupController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ListController.html" data-type="entity-link">ListController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MenuController.html" data-type="entity-link">MenuController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link">ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoleController.html" data-type="entity-link">RoleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteController.html" data-type="entity-link">SiteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SqldirectController.html" data-type="entity-link">SqldirectController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagController.html" data-type="entity-link">TagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ViewController.html" data-type="entity-link">ViewController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArticleEntity.html" data-type="entity-link">ArticleEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseController.html" data-type="entity-link">BaseController</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CorporationEntity.html" data-type="entity-link">CorporationEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticleDto.html" data-type="entity-link">CreateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCommentDto.html" data-type="entity-link">CreateCommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCorporationDto.html" data-type="entity-link">CreateCorporationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateErrorLogDto.html" data-type="entity-link">CreateErrorLogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGroupDto.html" data-type="entity-link">CreateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateListDto.html" data-type="entity-link">CreateListDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateListEntryDto.html" data-type="entity-link">CreateListEntryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMenuDto.html" data-type="entity-link">CreateMenuDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateMenuEntryDto.html" data-type="entity-link">CreateMenuEntryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleAppDto.html" data-type="entity-link">CreateRoleAppDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link">CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSiteDto.html" data-type="entity-link">CreateSiteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErrorLogEntity.html" data-type="entity-link">ErrorLogEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FollowsEntity.html" data-type="entity-link">FollowsEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/GroupEntity.html" data-type="entity-link">GroupEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListEntity.html" data-type="entity-link">ListEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListEntryEntity.html" data-type="entity-link">ListEntryEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link">LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuAppEntity.html" data-type="entity-link">MenuAppEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuEntryEntity.html" data-type="entity-link">MenuEntryEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyLogger.html" data-type="entity-link">MyLogger</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleEntity.html" data-type="entity-link">RoleEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleMenuAppEntity.html" data-type="entity-link">RoleMenuAppEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleMenuEntryEntity.html" data-type="entity-link">RoleMenuEntryEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SiteEntity.html" data-type="entity-link">SiteEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TagEntity.html" data-type="entity-link">TagEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToIntegerPipe.html" data-type="entity-link">ToIntegerPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArticleService.html" data-type="entity-link">ArticleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link">AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentService.html" data-type="entity-link">CommentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CorporationService.html" data-type="entity-link">CorporationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseConfig.html" data-type="entity-link">DatabaseConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorlogService.html" data-type="entity-link">ErrorlogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupService.html" data-type="entity-link">GroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListService.html" data-type="entity-link">ListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link">MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link">ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link">RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteService.html" data-type="entity-link">SiteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SqldirectService.html" data-type="entity-link">SqldirectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link">TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link">ValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewService.html" data-type="entity-link">ViewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ArticleData.html" data-type="entity-link">ArticleData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticleRO.html" data-type="entity-link">ArticleRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticlesRO.html" data-type="entity-link">ArticlesRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link">Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommentsRO.html" data-type="entity-link">CommentsRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CorporationData.html" data-type="entity-link">CorporationData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CorporationRO.html" data-type="entity-link">CorporationRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorLogData.html" data-type="entity-link">ErrorLogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ErrorLogRO.html" data-type="entity-link">ErrorLogRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupData.html" data-type="entity-link">GroupData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupRO.html" data-type="entity-link">GroupRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListData.html" data-type="entity-link">ListData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListEntry.html" data-type="entity-link">ListEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListEntryRO.html" data-type="entity-link">ListEntryRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListRO.html" data-type="entity-link">ListRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuAppData.html" data-type="entity-link">MenuAppData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuAppEntry.html" data-type="entity-link">MenuAppEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuEntryRO.html" data-type="entity-link">MenuEntryRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuRO.html" data-type="entity-link">MenuRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileData.html" data-type="entity-link">ProfileData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileRO.html" data-type="entity-link">ProfileRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleData.html" data-type="entity-link">RoleData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleRO.html" data-type="entity-link">RoleRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteData.html" data-type="entity-link">SiteData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteRO.html" data-type="entity-link">SiteRO</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserData.html" data-type="entity-link">UserData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRO.html" data-type="entity-link">UserRO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});