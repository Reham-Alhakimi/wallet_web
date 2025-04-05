'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "883e808ee1a1a545ba02825d0eca0f9b",
"version.json": "b77b52f8c57443a1950a969db73d791b",
"index.html": "3344dd83a135bd54b4a260a5c275fdb5",
"/": "3344dd83a135bd54b4a260a5c275fdb5",
"main.dart.js": "0aa0df2062b9cd4d8b07865e7791ca7e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d226f859daf6ba0a1be10afcea52b774",
"assets/AssetManifest.json": "c6c304963d2e237a8a96ed2f40636c3f",
"assets/NOTICES": "b31b753a278d12ff2a66e17faf714cce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0fcbcbb830a10c3cb43dd20394bd4637",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d59c911c7bd2d8d865b88399c47dcb8c",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/reown_appkit/lib/modal/assets/account_disconnect.svg": "1e962e3b5c49f1066d059ee7607ca0fe",
"assets/packages/reown_appkit/lib/modal/assets/token_placeholder.svg": "3a5862d4c9d5079be33d55691e730ae2",
"assets/packages/reown_appkit/lib/modal/assets/account_copy.svg": "3dfb381b033f975d32608f523561479a",
"assets/packages/reown_appkit/lib/modal/assets/png/logo_wc.png": "e73ddf9aae5dc9f2a6668e45ad4bde69",
"assets/packages/reown_appkit/lib/modal/assets/png/2.0x/logo_wc.png": "e73ddf9aae5dc9f2a6668e45ad4bde69",
"assets/packages/reown_appkit/lib/modal/assets/png/2.0x/farcaster.png": "0cbc4d47af62f9c09c35fd27a376a7fc",
"assets/packages/reown_appkit/lib/modal/assets/png/2.0x/google_play.png": "6d9be20a67d8b99d04bbf688973b6c6e",
"assets/packages/reown_appkit/lib/modal/assets/png/2.0x/app_store.png": "9a63bdbc92a38638edeaedc32fe093d8",
"assets/packages/reown_appkit/lib/modal/assets/png/3.0x/logo_wc.png": "2a597146116d0d5181e904b0c9264fdc",
"assets/packages/reown_appkit/lib/modal/assets/png/3.0x/farcaster.png": "583c2e0eb0ee88718b67aa8a86d9ab88",
"assets/packages/reown_appkit/lib/modal/assets/png/3.0x/google_play.png": "6d8da1b598c096f5a81e3d911c8ca4dd",
"assets/packages/reown_appkit/lib/modal/assets/png/3.0x/app_store.png": "aed9e5fcb620e705831ccda22a853031",
"assets/packages/reown_appkit/lib/modal/assets/png/farcaster.png": "39246cdc66e93104efb35490b639355e",
"assets/packages/reown_appkit/lib/modal/assets/png/google_play.png": "cdbe574f3e9b36cf8ee5be25a630ecf0",
"assets/packages/reown_appkit/lib/modal/assets/png/app_store.png": "dd9fdf8975a6f9cf988d0871d5411f60",
"assets/packages/reown_appkit/lib/modal/assets/icons/search.svg": "bbdea538979fc2e7a8a8538f67b0541a",
"assets/packages/reown_appkit/lib/modal/assets/icons/checkmark.svg": "7c4ee5c9050caf592728a3fd650872ba",
"assets/packages/reown_appkit/lib/modal/assets/icons/arrow_top_right.svg": "f6ae3a7fcb83aa44bac69608b18cf500",
"assets/packages/reown_appkit/lib/modal/assets/icons/dots.svg": "4d9fa6466b92e51c7a53b37a451076eb",
"assets/packages/reown_appkit/lib/modal/assets/icons/disconnect.svg": "fe22360a30e0f2dfcc0166af27093bb0",
"assets/packages/reown_appkit/lib/modal/assets/icons/copy_14.svg": "09ce7e33c714abc2bea05eef458d19a8",
"assets/packages/reown_appkit/lib/modal/assets/icons/mail.svg": "f3f5a34474ce2f5a91b4d46ae754fded",
"assets/packages/reown_appkit/lib/modal/assets/icons/wallet.svg": "bac0bd06bc142c95b1b68ed306b1187c",
"assets/packages/reown_appkit/lib/modal/assets/icons/chevron_right.svg": "6d73c4dc08c1b29868670f285f90dc47",
"assets/packages/reown_appkit/lib/modal/assets/icons/code.svg": "0e2acde8a0260f0b4597c69ba1d2976d",
"assets/packages/reown_appkit/lib/modal/assets/icons/chevron_left.svg": "e258aa34911cfae14743343f7fa9f58b",
"assets/packages/reown_appkit/lib/modal/assets/icons/warning.svg": "2a11047bfb7f2ef43cd4535aa8511461",
"assets/packages/reown_appkit/lib/modal/assets/icons/info.svg": "8327eb5fda28136ea6bb96e2f9c28ca1",
"assets/packages/reown_appkit/lib/modal/assets/icons/close.svg": "54241b625497b2a264df8fccb7a8a649",
"assets/packages/reown_appkit/lib/modal/assets/icons/copy.svg": "0b2aef8f77993bf3ef6ff979ec1dedf5",
"assets/packages/reown_appkit/lib/modal/assets/icons/refresh.svg": "65e23c2043fc03c67660d4b846236624",
"assets/packages/reown_appkit/lib/modal/assets/icons/coin.svg": "75eb1709228de3ba415b11b7d31c3c1f",
"assets/packages/reown_appkit/lib/modal/assets/icons/network.svg": "26be13d1280d5b1f9a11324a78ca8afa",
"assets/packages/reown_appkit/lib/modal/assets/icons/verif.svg": "d757b559a33476394f77c593527a1b34",
"assets/packages/reown_appkit/lib/modal/assets/icons/extension.svg": "0f4fcd6cbe352c09eb9e151a2e0f6b06",
"assets/packages/reown_appkit/lib/modal/assets/icons/wc.svg": "5d82c10b49486cdb55a67bacb36633e0",
"assets/packages/reown_appkit/lib/modal/assets/icons/compass.svg": "96a71c0b2e8136482957120cc16f28fe",
"assets/packages/reown_appkit/lib/modal/assets/icons/mobile.svg": "52e74ac4af896a985dfda155f7bb14f3",
"assets/packages/reown_appkit/lib/modal/assets/icons/refresh_back.svg": "c856132e8c52d9c6dd35eb9d43cbd389",
"assets/packages/reown_appkit/lib/modal/assets/icons/regular/wallet.svg": "933136188af50bf74e5b7ee0786c336e",
"assets/packages/reown_appkit/lib/modal/assets/icons/swap_horizontal.svg": "2becbdedd89ffaaa2111daa290956d5b",
"assets/packages/reown_appkit/lib/modal/assets/icons/help.svg": "3c03bdbbd073a7556a837abf21c52fab",
"assets/packages/reown_appkit/lib/modal/assets/network_placeholder.svg": "68f2b0a1756952f2f1dd75558b98a1de",
"assets/packages/reown_appkit/lib/modal/assets/AppIcon.png": "b75e7478d25cba779922dd8ba50933f1",
"assets/packages/reown_appkit/lib/modal/assets/light/github_logo.svg": "73ff262d9c42db3d76a03cb0530b56a4",
"assets/packages/reown_appkit/lib/modal/assets/light/all_wallets.svg": "c1df4d56d2564aa3ccf28931ac51e916",
"assets/packages/reown_appkit/lib/modal/assets/light/discord_logo.svg": "c465c4650acbcee0a53311d60adee3c6",
"assets/packages/reown_appkit/lib/modal/assets/light/facebook_logo.svg": "152a9c45f0e68feadd8f15c9e5b90d1c",
"assets/packages/reown_appkit/lib/modal/assets/light/apple_logo.svg": "1c2e474924a90715809ec4465a3c3f2b",
"assets/packages/reown_appkit/lib/modal/assets/light/x_logo.svg": "f77987fc85a32dd7dee5e98789d6d8ab",
"assets/packages/reown_appkit/lib/modal/assets/light/extension_button.svg": "c9d917766350916bd48e7dac6ea255dc",
"assets/packages/reown_appkit/lib/modal/assets/light/more_social_icon.svg": "c01a387a26eeabe13e8cc5115a99d6f2",
"assets/packages/reown_appkit/lib/modal/assets/light/mobile_button.svg": "1a6d5978f470e5e56c93cd2602e86a2c",
"assets/packages/reown_appkit/lib/modal/assets/light/logo_walletconnect.svg": "b7f6821ccd5d4b805b5dc6cc98a802f1",
"assets/packages/reown_appkit/lib/modal/assets/light/desktop_button.svg": "6cb02d5b2d4fe40c173337d8183dd5ea",
"assets/packages/reown_appkit/lib/modal/assets/light/web_button.svg": "063a5bb2f31eba3e1291a5dbbb4b4e88",
"assets/packages/reown_appkit/lib/modal/assets/light/all_wallets_button.svg": "34bd234b88d68986952d7f4e0cf65444",
"assets/packages/reown_appkit/lib/modal/assets/light/qr_code_button.svg": "3f46784373248b623cbb9d569044f291",
"assets/packages/reown_appkit/lib/modal/assets/light/twitch_logo.svg": "6b6c187feefb56fd2e5cd121305d9a44",
"assets/packages/reown_appkit/lib/modal/assets/light/input_cancel.svg": "f0a69929f42f8bce6b80ca38f0c723b8",
"assets/packages/reown_appkit/lib/modal/assets/light/qr_code.svg": "86e507bc2c166ffaa096de2a0f3dbe67",
"assets/packages/reown_appkit/lib/modal/assets/light/google_logo.svg": "8f89273afa59538fb75c3637cb66fb36",
"assets/packages/reown_appkit/lib/modal/assets/light/telegram_logo.svg": "240aa708d56f5800959a060dea927d32",
"assets/packages/reown_appkit/lib/modal/assets/light/farcaster_logo.svg": "acd1b1ccb807757accc8d5f4cd863916",
"assets/packages/reown_appkit/lib/modal/assets/light/code_button.svg": "c39b1088176e162b5879bb9bcb3a49f1",
"assets/packages/reown_appkit/lib/modal/assets/dark/github_logo.svg": "73ff262d9c42db3d76a03cb0530b56a4",
"assets/packages/reown_appkit/lib/modal/assets/dark/all_wallets.svg": "4ece03ffb6d614fd85a4d6df5b108d44",
"assets/packages/reown_appkit/lib/modal/assets/dark/discord_logo.svg": "c465c4650acbcee0a53311d60adee3c6",
"assets/packages/reown_appkit/lib/modal/assets/dark/facebook_logo.svg": "152a9c45f0e68feadd8f15c9e5b90d1c",
"assets/packages/reown_appkit/lib/modal/assets/dark/apple_logo.svg": "1c2e474924a90715809ec4465a3c3f2b",
"assets/packages/reown_appkit/lib/modal/assets/dark/x_logo.svg": "f77987fc85a32dd7dee5e98789d6d8ab",
"assets/packages/reown_appkit/lib/modal/assets/dark/extension_button.svg": "a1ebc16d3f6760e119bd0c436e724288",
"assets/packages/reown_appkit/lib/modal/assets/dark/more_social_icon.svg": "27519472b2fd2375a4ff3d926bc750da",
"assets/packages/reown_appkit/lib/modal/assets/dark/mobile_button.svg": "3062507bbc0b5d2a29c104f6dbd61629",
"assets/packages/reown_appkit/lib/modal/assets/dark/logo_walletconnect.svg": "1062455cf06aba4ef160f906514a28ef",
"assets/packages/reown_appkit/lib/modal/assets/dark/desktop_button.svg": "2b42d2f08591c8176ee81299c2010009",
"assets/packages/reown_appkit/lib/modal/assets/dark/web_button.svg": "61af2a36faadee5f62018fc59201cb11",
"assets/packages/reown_appkit/lib/modal/assets/dark/all_wallets_button.svg": "ade430bbada2c25a67ada7ad3fcc9443",
"assets/packages/reown_appkit/lib/modal/assets/dark/qr_code_button.svg": "87923d03176199d48b9cd2f46568844a",
"assets/packages/reown_appkit/lib/modal/assets/dark/twitch_logo.svg": "6b6c187feefb56fd2e5cd121305d9a44",
"assets/packages/reown_appkit/lib/modal/assets/dark/input_cancel.svg": "66ea9f88351527973b7d22f22bcb86f7",
"assets/packages/reown_appkit/lib/modal/assets/dark/qr_code.svg": "851d45bb010e5dfaa2f34f9cb62c5e7f",
"assets/packages/reown_appkit/lib/modal/assets/dark/google_logo.svg": "8f89273afa59538fb75c3637cb66fb36",
"assets/packages/reown_appkit/lib/modal/assets/dark/telegram_logo.svg": "240aa708d56f5800959a060dea927d32",
"assets/packages/reown_appkit/lib/modal/assets/dark/farcaster_logo.svg": "acd1b1ccb807757accc8d5f4cd863916",
"assets/packages/reown_appkit/lib/modal/assets/dark/code_button.svg": "50639a4921acf72c11feb41c0dadb773",
"assets/packages/reown_appkit/lib/modal/assets/wallet_placeholder.svg": "1a9b45ad3b851a6cc7193ee61808aa7e",
"assets/packages/reown_appkit/lib/modal/assets/help/painting.svg": "bc1f3af0e6e5c57f2e82ac74468fa31f",
"assets/packages/reown_appkit/lib/modal/assets/help/system.svg": "5653685e83efb0b3d45a38db575de9c8",
"assets/packages/reown_appkit/lib/modal/assets/help/chart.svg": "7ac5fd4b1fa05e6853229070fd380c89",
"assets/packages/reown_appkit/lib/modal/assets/help/user.svg": "ecb763fd28aa204a17594803b9313bf1",
"assets/packages/reown_appkit/lib/modal/assets/help/eth.svg": "baf5ae21f167b4512c2f12be3dc032b0",
"assets/packages/reown_appkit/lib/modal/assets/help/lock.svg": "3084e9137bc93199a6a9010f63757442",
"assets/packages/reown_appkit/lib/modal/assets/help/key.svg": "3a19cb388cfc0747b9517c424aaecfe9",
"assets/packages/reown_appkit/lib/modal/assets/help/defi.svg": "82f1e28b6c5abe77773fef9aaf21e55a",
"assets/packages/reown_appkit/lib/modal/assets/help/layers.svg": "e29d83814272f8b17db2e84eb62938a7",
"assets/packages/reown_appkit/lib/modal/assets/help/dao.svg": "37bc884bb4c25c668e857a7b7c5b6adc",
"assets/packages/reown_appkit/lib/modal/assets/help/network.svg": "3f8bd92c1e4b1d766c361c113273faaa",
"assets/packages/reown_appkit/lib/modal/assets/help/noun.svg": "45ac2041d4e172746cefcb304c577bfc",
"assets/packages/reown_appkit/lib/modal/assets/help/compass.svg": "73f5b5773495c7b38034917e1108e310",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "24860f0a3b97fc658c6f19badd1bcede",
"assets/fonts/MaterialIcons-Regular.otf": "ebd30b55c48e42110c67397c72a03e9a",
"assets/assets/images/background/background.png": "44f7e099e0af76431ec9520378be833f",
"assets/assets/images/warning.png": "0db2b94e0cc2a364a83ee8da0c5335e4",
"assets/assets/images/logo/logo_dark.png": "1e1eec7d463900704d1445635b8c0a86",
"assets/assets/images/logo/logo_light.png": "1e1eec7d463900704d1445635b8c0a86",
"assets/assets/images/userdeleteImage.png": "b591bf157282f7a8110609c199c49bfc",
"assets/assets/images/profile.png": "20b9c8b34359dc4ace3f3ee4f6e156ee",
"assets/assets/images/success.png": "2d1ca6db06297c167a206d40d4d20b45",
"assets/assets/images/no_data.png": "bb34dffd2a6df0bf27aa657f4bc7c3fe",
"assets/assets/animation/no-data.json": "8ef83d0c31a4e70faf016013a2db1739",
"assets/assets/animation/done.json": "99ffa038b61c4f821aeec4690efab801",
"assets/assets/animation/no_internet.json": "c9386298e8e1ed774997aece74ff95f4",
"assets/assets/icons/deposit.png": "cbd6a424c8f0fe6b981ffc313d8647ff",
"assets/assets/icons/nav_profile.svg": "7f2c98fadb93ce87b2ba48ebe828380a",
"assets/assets/icons/transaction.png": "a0ad26b3fa2996d3a96510e667c27b15",
"assets/assets/icons/deposit_action.svg": "bcb3c12c4afeaadeacfa8a7aace07cc0",
"assets/assets/icons/advertisement.png": "c301d7025d81b76ddc10fdd0c13a0f09",
"assets/assets/icons/verified-user.svg": "d688a6cf964967b85c94416a69f1a1ba",
"assets/assets/icons/market-growth.png": "c6879a2278a8ea98444d4139c8ba0db9",
"assets/assets/icons/menu_security.svg": "2933ebb74ffaaf81f170e8b9bc99d487",
"assets/assets/icons/convert_action.svg": "9d7dad9bdbd766a2deeda1025068b63f",
"assets/assets/icons/no_money.png": "ec9b7c57c0aaad65e3053b153de91d56",
"assets/assets/icons/doc.svg": "bc5f9db194cc6b8b429ac8a151e8f387",
"assets/assets/icons/referral.png": "38847dc99a15fc53ce1513aca30c3fda",
"assets/assets/icons/pending_icon.svg": "784dc75e6580cbb1fd9a8ec1f863feea",
"assets/assets/icons/menu_preference.svg": "c168ea2f6990f5e833cfd1c2523391d9",
"assets/assets/icons/menu_profile.svg": "fa88539fa331cb72b3f5f9e1818a54b7",
"assets/assets/icons/google_icon.svg": "8a1cca8949ae9def3f086ccc45c847f9",
"assets/assets/icons/withdraw_action.svg": "1e0bf43e787578118db9f39191bf4465",
"assets/assets/icons/arrow_up.svg": "4936ebd7780a248f60dcc5f37ce2b253",
"assets/assets/icons/send_action.svg": "d72ec7b551ddbc1c26e8953f8018f317",
"assets/assets/icons/menu_fav_icon.svg": "de4e298beb3c08028fed1fbcf7c772d1",
"assets/assets/icons/linkedin_icon.png": "80aba14d7915031796bf3b7ab721a231",
"assets/assets/icons/menu_history.svg": "0c928a04a09bcbfa4a148f6e0232a330",
"assets/assets/icons/buy_sell.png": "19139309df73e8df7f218a6ceca927ab",
"assets/assets/icons/menu_change_password.svg": "3e9bfd2324e870790a417f1d620a956e",
"assets/assets/icons/meta_mask_icon.svg": "62e127d26785204761ceb78a889eeb1f",
"assets/assets/icons/support.svg": "f9360d27e8a121558295b041c8840e12",
"assets/assets/icons/withdraw.png": "8cddd01c9f179d6396ee618debb67aca",
"assets/assets/icons/withdrawdark.png": "00b841b76f0f8d462285164d80f3a057",
"assets/assets/icons/transfer.png": "d1fa0e9dacf425296e41f53fa51b6b75",
"assets/assets/icons/nav_market.svg": "5c10358132f71dca859b7e602bc35fa3",
"assets/assets/icons/add_action.svg": "4383f6970ec08a1c826805340687a67f",
"assets/assets/icons/minus_action.svg": "0d9c18be6f556da4c6840bde719d0222",
"assets/assets/icons/xlsx.svg": "10c896c7d567145632e2d3e7ae120ad2",
"assets/assets/icons/arrow_down.svg": "a95fc6efb2b0052360caff0e2b6a983a",
"assets/assets/icons/menu_withdraw.svg": "184d685964e7410480cb4476e747e701",
"assets/assets/icons/trade_icon.png": "e9f0ca611f63f700c2ffb8890b7ee5ba",
"assets/assets/icons/nav_home.svg": "4f6b4d5687570ef52d183f43de133b20",
"assets/assets/icons/nav_wallet.svg": "08f7abf45c9eae1ecc1f685ba7b72477",
"assets/assets/icons/binary.png": "5b39c1a094d091c68f53452b217c2ec9",
"assets/assets/icons/menu_policy.svg": "847f4b3d08f01c3f44ac9ad5fbd42c90",
"assets/assets/icons/pdf.svg": "d37c602fe27684730d8c68891ecefe26",
"assets/assets/icons/facebook_icon.png": "0833b053623deeac53edebf59cfc5429",
"assets/assets/icons/history_icon.svg": "03b556575f816f83f1f4c75ee15f001e",
"assets/assets/icons/language.png": "59c451785f19beb636dc8496377a4c3e",
"assets/assets/icons/balance_card_bg_shape1.svg": "c363e0dedfc171d7127f97db4da8d1ec",
"assets/assets/icons/arrow_double.svg": "b0c80788da304bf31be66b3c6563d7d5",
"assets/assets/icons/faq.png": "b42c7de51b466c4e58821884ad26d2da",
"assets/assets/icons/balance_card_bg_shape2.svg": "d8139bb32d152e6da53dcb4f59a3ef6e",
"assets/assets/icons/balance_card_bg_shape3.svg": "7f431ca7d863a12530e25dda778d5974",
"assets/assets/icons/menu_notification.svg": "0a876b3b59f852e3110c1539260e909f",
"assets/assets/icons/convert.png": "5cb39e1ab777ca7a329699b0438c4bda",
"assets/assets/icons/menu_deposit.svg": "0f13dc6c22a921ca63cd48b6d8fbfd24",
"assets/assets/icons/block_user.svg": "f6101e080909883d68c300ec51503250",
"assets/assets/icons/trade.png": "9f66f8618462458b38515de706bda8d2",
"assets/assets/icons/balance_card_bg_shape4.svg": "32cf652fb21dc6b98466b2c84385ff9e",
"assets/assets/icons/folder.svg": "9579df4a54573019b2b7569dd098baef",
"assets/assets/icons/depositdark.png": "b4df353b6a8e943fedf71008e22ecbba",
"assets/assets/icons/finger_print.svg": "62547371f0ac70f944d295ad572e55d9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
