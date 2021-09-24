<template>
  <div class="loginfront">

<div id="app" data-page="{&quot;component&quot;:&quot;Welcome&quot;,&quot;props&quot;:{&quot;errors&quot;:{},&quot;auth&quot;:null,&quot;profile&quot;:{&quot;default_pdp&quot;:&quot;images\/pdp\/user.svg&quot;},&quot;canLogin&quot;:true,&quot;canRegister&quot;:true,&quot;laravelVersion&quot;:&quot;8.60.0&quot;,&quot;phpVersion&quot;:&quot;7.3.30-1+ubuntu18.04.1+deb.sury.org+1&quot;},&quot;url&quot;:&quot;\/&quot;,&quot;version&quot;:&quot;b0dc384d18d9d36bacca91733d2dfe67&quot;}" data-v-app=""><div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0" data-v-317d1a6e=""><div class="hidden fixed top-0 right-0 px-6 py-4 sm:block" data-v-317d1a6e=""><a class="text-sm text-gray-700 font-bold" href="https://enqueteurs.instat.mg/login" data-v-317d1a6e=""> Se connecter </a><a class="ml-4 text-sm text-gray-700 font-bold hover:text-blue-900" href="https://enqueteurs.instat.mg/register" data-v-317d1a6e=""> S'inscrire </a></div><div class="max-w-4xl mx-auto sm:px-2 lg:px-4" data-v-317d1a6e=""><div class="flex items-center py-4" data-v-317d1a6e=""><img src="https://i.imgur.com/9KtM1cN.png" alt="" class="block h-24 w-auto" data-v-317d1a6e=""></div><div class="flex justify-center pt-8 sm:justify-start sm:pt-0" data-v-317d1a6e=""><h1 class="text-2xl text-instat-blue" data-v-317d1a6e=""> Bienvenue sur notre portail Enquêteurs INSTAT </h1></div><div class="mt-8 bg-white dark:bg-gray-800 text-gray-700 overflow-hidden shadow sm:rounded-lg" data-v-317d1a6e=""><div style="background-color: lightgray;" class="p-6" data-v-317d1a6e=""><div class="flex items-center grid grid-cols-1 lg:grid-cols-2 gap-4" data-v-317d1a6e=""><div class="my-2" data-v-317d1a6e=""> Identifiez-vous si vous avez déjà un compte </div><div data-v-317d1a6e=""><button type="submit" class="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" data-v-317d1a6e=""><!--v-if--><router-link to="/connexionfront" data-v-317d1a6e=""> Connexion </router-link></button></div><div class="my-2" data-v-317d1a6e=""> Vous n'avez pas encore de compte ? </div><div data-v-317d1a6e=""><button type="submit" class="px-4 py-2 bg-transparent border border-gray-500 rounded-sm font-semibold text-xs text-gray-700 shadow-sm uppercase tracking-widest hover:bg-gray-50 active:bg-gray-300 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150" data-v-317d1a6e=""><a href="https://enqueteurs.instat.mg/register" data-v-317d1a6e=""> Inscription </a></button></div></div></div></div><div class="flex justify-center mt-4 sm:items-center sm:justify-between" data-v-317d1a6e=""><div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0" data-v-317d1a6e=""> Institut National de la Statistique - Madagascar <a href=" https://instat.mg" class="ml-2 text-blue-400 hover:text-blue-600" target="_blank" data-v-317d1a6e=""> www.instat.mg </a></div></div></div></div></div>
  </div>
</template>
<style>


.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}

    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: #4B5563;

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #4B5563, 0 0 5px #4B5563;
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: #4B5563;
      border-left-color: #4B5563;
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
:root topadblock, :root span[id^="ezoic-pub-ad-placeholder-"], :root script[src^="http://free-shoutbox.net/app/webroot/shoutbox/sb.php?shoutbox="] + #freeshoutbox_content, :root input[onclick^="window.open('http://www.FriendlyDuck.com/"], :root img[alt^="Fuckbook"], :root iframe[src^="http://static.mozo.com.au/strips/"], :root div[jscontroller="U835zd"] + c-wiz[jsrenderer="YnuqN"], :root div[id^="zergnet-widget"], :root div[id^="traffective-ad-"], :root div[id^="sticky_ad_"], :root div[id^="rc-widget-"], :root div[id^="q1-adset-"], :root div[id^="proadszone-"], :root div[id^="lazyad-"], :root div[id^="gtm-ad-"], :root div[id^="ezoic-pub-ad-"], :root div[id^="dmRosAdWrapper"], :root div[id^="div-adtech-ad-"], :root div[id^="dfp-slot-"], :root div[id^="dfp-ad-"], :root div[id^="code_ads_"], :root div[id^="block-views-topheader-ad-block-"], :root div[id^="advt-"], :root div[id^="advads_"], :root div[id^="ads300_600-widget"], :root input[onclick^="window.open('http://www.friendlyduck.com/"], :root div[id^="ads300_250-widget"], :root div[id^="ads300_100-widget"], :root div[id^="ads120_600-widget"], :root div[id^="adrotate_widgets-"], :root div[id^="adfox_"], :root div[id^="ad_script_"], :root div[id^="ad_rect_"], :root div[id^="ad_position_"], :root div[id^="ad-server-"], :root div[id^="ad-inserter-"], :root div[id^="ad-cid-"], :root div[id^="acm-ad-tag-"], :root div[id^="YFBMSN"], :root div[id^="ADV-SLOT-"], :root div[data-test-id="AdDisplayWrapper"], :root div[data-spotim-slot], :root div[data-role="sidebarAd"], :root div[data-native_ad], :root div[data-mediatype="advertising"], :root div[data-id-advertdfpconf], :root div[data-crl="true"][data-id^="CarouselPLA-"], :root div[data-content="Advertisement"], :root div[data-adunit], :root div[data-adunit-path], :root div[data-adname], :root div[data-ad-wrapper], :root div[data-ad-placeholder], :root div[class^="zn-sponsored-outbrain-"], :root div[class^="proadszone-"], :root div[class^="pane-google-admanager-"], :root div[class^="lifeOnwerAd"], :root div[class^="largeRectangleAd_"], :root div[class^="kiwiad-popup"], :root div[class^="kiwiad-desktop"], :root div[class^="index_adBeforeContent_"], :root div[class^="index_adAfterContent_"], :root div[class^="index__adWrapper"], :root div[class^="block-openx-"], :root div[class^="backfill-taboola-home-slot-"], :root div[class^="articleAdUnitMPU_"], :root div[class^="advertisement-desktop"], :root div[class^="adsbutt_wrapper_"], :root div[class^="ads-partner-"], :root div[class^="adbanner_"], :root div[class^="ad_position_"], :root div[class^="SponsoredAds"], :root div[class^="ResponsiveAd-"], :root div[class^="PreAd_"], :root div[class^="Display_displayAd"], :root div[class^="Directory__footerAds"], :root div[class^="BannerAd_"], :root div[class^="AdhesionAd_"], :root div[class^="Ad__bigBox"], :root div[class^="Ad__adContainer"], :root div[id^="divAdvAD_"], :root div[class^="ad_border_"], :root div[class^="AdItem-"], :root div[class^="AdEmbeded__AddWrapper"], :root span[data-component-type="s-ads-metrics"], :root div[class^="AdBannerWrapper-"], :root div[class*="_AdInArticle_"], :root div[class*="-storyBodyAd-"], :root div[data-subscript="Advertising"], :root div[class$="dealnews"] > .dealnews, :root div > [class][onclick*=".updateAnalyticsEvents"], :root display-ads, :root display-ad-component, :root bottomadblock, :root aside[id^="tn_ads_widget-"], :root aside[id^="adrotate_widgets-"], :root amp-ad-custom, :root a[target="_blank"][onmousedown="this.href^='http://paid.outbrain.com/network/redir?"], :root a[target="_blank"][href^="http://api.taboola.com/"], :root a[style="display:block;width:300px;min-height:250px"][href^="http://li.cnet.com/click?"], :root div[class^="BlockAdvert-"], :root a[src^="https://www.utherverse.com/net/"], :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"] + .ob_source, :root a[onmousedown^="this.href='http://paid.outbrain.com/network/redir?"][target="_blank"], :root a[onclick*="//m.economictimes.com/etmack/click.htm"], :root a[href^="https://zononi.com/"], :root a[href^="https://www.what-sexdating.com/"], :root a[href^="https://www.vewwrmp.com/"], :root a[href^="https://www.spyoff.com/"], :root a[href^="https://www.sheetmusicplus.com/?aff_id="], :root a[href^="https://www.sheetmusicplus.com/"][href*="?aff_id="], :root a[href^="https://www.share-online.biz/affiliate/"], :root a[href^="https://www.securegfm.com/"], :root a[href^="https://www.rabbits.webcam/?id="], :root a[href^="https://www.purevpn.com/"][href*="&utm_source=aff-"], :root a[href^="https://www.privateinternetaccess.com/"] > img, :root a[href^="https://www.porngamesxxx.com/"][href*="?campaign="], :root a[href^="https://www.passeura.com/"], :root div[id^="amzn-assoc-ad"], :root a[href^="https://www.oboom.com/ref/"], :root div[itemtype="http://schema.org/WPAdBlock"], :root a[href^="https://www.nudeidols.com/cams/"], :root a[href^="https://www.mypornstarcams.com/landing/click/"], :root a[href^="https://www.kingsoffetish.com/tour?partner_id="], :root div[data-adzone], :root a[href^="https://www.iyalc.com/"], :root a[href^="https://www.goldenfrog.com/vyprvpn?offer_id="][href*="&aff_id="], :root a[href^="https://www.get-express-vpn.com/offer/"], :root a[href^="https://www.gambling-affiliation.com/cpc/"], :root a[href^="https://www.clicktraceclick.com/"], :root a[href^="https://www.camsoda.com/enter.php?id="], :root a[href^="https://www.brazzersnetwork.com/landing/"], :root a[href^="https://www.bebi.com"], :root div[class^="pane-adsense-managed-"], :root a[href^="https://www.bang.com/?aff="], :root a[href^="https://www.awin1.com/cread.php?awinaffid="], :root a[href^="https://www.arthrozene.com/"][href*="?tid="], :root a[href^="https://www.adxtro.com/"], :root a[href^="https://weedzy.co.uk/"][href*="&utm_"], :root a[href^="https://vod09197d7.club/"], :root a[href^="https://vo2.qrlsx.com/"], :root a[href^="https://unreshiramor.com/"], :root a[href^="https://uncensored.game/"], :root a[href^="https://ttf.trmobc.com/"], :root a[href^="https://trusted-click-host.com/"], :root a[href^="https://trf.bannerator.com/"], :root a[href^="https://traffic.bannerator.com/"], :root a[href^="https://trackjs.com/?utm_source"], :root a[href^="https://tracking.truthfinder.com/?a="], :root a[href^="https://tracking.comfortclick.eu/"], :root a[href^="https://track.wg-aff.com"], :root a[href^="https://track.ultravpn.com/"], :root a[href^="https://track.trkinator.com/"], :root a[href^="https://track.interactivegf.com/"], :root a[href^="https://www.adultempire.com/"][href*="?partner_id="], :root a[href^="https://track.healthtrader.com/"], :root a[href^="https://track.clickmoi.xyz/"], :root a[href^="https://track.bruceads.com/"], :root a[href^="https://track.afftck.com/"], :root a[href^="https://track.afcpatrk.com/"], :root a[href^="https://torrentsafeguard.com/?aid="], :root a[href^="https://torguard.net/aff.php"] > img, :root a[href^="https://topoffers.com/"][href*="/?pid="], :root a[href^="https://tc.tradetracker.net/"] > img, :root a[href^="https://t.mobtya.com/"], :root a[href^="https://t.hrtyj.com/"], :root a[href^="https://t.hrtye.com/"], :root div[id^="ad_head_celtra_"], :root a[href^="https://wittered-mainging.com/"], :root a[href^="https://t.grtyi.com/"], :root a[href^="https://syndication.optimizesrv.com/splash.php?"], :root a[href^="https://syndication.exoclick.com/splash.php?"], :root a[href^="https://syndication.dynsrvtbg.com/splash.php?"], :root a[href^="https://static.fleshlight.com/images/banners/"], :root a[href^="https://squren.com/rotator/?atomid="], :root a[href^="https://sexsimulator.game/tab/?SID="], :root a[href^="https://servedbyadbutler.com/"], :root a[href^="https://www.travelzoo.com/oascampaignclick/"], :root a[href^="https://see.kmisln.com/"], :root a[href^="https://secure.starsaffiliateclub.com/C.ashx?"], :root div[id^="ad-div-"], :root a[href^="https://secure.eveonline.com/ft/?aid="], :root a[href^="https://secure.cbdpure.com/aff/"], :root a[href^="https://secure.bstlnk.com/"], :root a[href^="https://secure.adnxs.com/clktrb?"], :root a[href^="https://scurewall.co/"], :root div[class^="kiwi-ad-wrapper"], :root a[href^="https://rev.adsession.com/"], :root [href*=".trackmstr.com"], :root a[href^="https://refpasrasw.world/"], :root a[href^="https://refpaexhil.top/"], :root AD-SLOT, :root a[href^="https://pubads.g.doubleclick.net/"], :root a[href^="https://prf.hn/click/"][href*="/camref:"] > img, :root #rhs_block .mod > .gws-local-hotels__booking-module, :root a[href^="http://www.my-dirty-hobby.com/?sub="], :root a[href^="https://porndeals.com/?track="], :root a[href^="https://offerforge.net/"], :root a[href^="https://myusenet.xyz/"], :root a[href^="https://my-movie.club/"], :root [href^="https://detachedbates.com/"], :root a[href^="https://mk-cdn.net/"], :root a[href^="https://mk-ads.com/"], :root a[href^="https://medleyads.com/"], :root a[href^="https://mediaserver.gvcaffiliates.com/renderBanner.do?"], :root iframe[src^="https://tpc.googlesyndication.com/"], :root a[href*=".approvallamp.club/"], :root a[href^="https://a.bestcontentoperation.top/"], :root a[href^="https://landing1.brazzersnetwork.com"], :root a[href^="http://adrunnr.com/"], :root a[href^="https://landing.brazzersplus.com/"], :root a[href^="https://land.rk.com/landing/"], :root .lads[width="100%"][style="background:#FFF8DD"], :root a[href^="https://land.brazzersnetwork.com/landing/"], :root a[href^="https://juicyads.in/"], :root a[href^="https://join.virtuallust3d.com/"], :root a[href^="http://www.uniblue.com/cm/"], :root a[href^="https://join.sexworld3d.com/track/"], :root a[href^="https://join.dreamsexworld.com/"], :root a[href^="https://iqoption.com/lp/mobile-partner/"][href*="?aff="], :root a[href*="a2g-secure.com"], :root a[href^="https://iqbroker.com/"][href*="?aff="], :root [href^="http://join.shemalepornstar.com/"], :root a[href^="https://incisivetrk.cvtr.io/click?"], :root a[href^="https://iactrivago.ampxdirect.com/"], :root…

.bg-gray-100[data-v-317d1a6e] {
        background-color: #f5f5f5;
        background-color: rgb(245, 245, 245, var(--tw-bg-opacity));
}
.border-gray-200[data-v-317d1a6e] {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}
.text-gray-400[data-v-317d1a6e] {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
}
.text-gray-500[data-v-317d1a6e] {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
}
.text-gray-600[data-v-317d1a6e] {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
}
.text-gray-700[data-v-317d1a6e] {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
}
.text-gray-900[data-v-317d1a6e] {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
}
@media (prefers-color-scheme: dark) {
.dark\:bg-gray-800[data-v-317d1a6e] {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
}
.dark\:bg-gray-900[data-v-317d1a6e] {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
}
.dark\:border-gray-700[data-v-317d1a6e] {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
}
.dark\:text-white[data-v-317d1a6e] {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.dark\:text-gray-400[data-v-317d1a6e] {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
}
}

</style>

<script>
export default {
    data() {
        return {

        }
    }
  }
</script>
