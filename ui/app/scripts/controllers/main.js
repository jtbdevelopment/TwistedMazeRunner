'use strict';

angular.module('tsbUI').controller('MainCtrl',
    ['$rootScope', 'jtbPlayerService', 'jtbAppLongName',
        function ($rootScope, jtbPlayerService, jtbAppLongName) {
            var controller = this;

            controller.showHelp = false;
            controller.showAdmin = false;
            controller.appName = jtbAppLongName;

            function fullSizeBody() {
                controller.mainBodySize = 'col-xs-12 col-sm-12 col-md-12';
            }

            function partialSizeBody() {
                controller.mainBodySize = 'col-xs-8 col-sm-9 col-md-10';
            }

            function setEmptySideBar() {
                controller.hideGames = false;
                controller.forceShowGames = false;
                controller.showAdmin = false;
                controller.showLogout = false;
                controller.player = {};
                controller.adTemplate = 'views/ads/empty.html';
                controller.sideBarTemplate = 'views/sidebar/empty.html';
                controller.sideBarSize = 'hidden';
                fullSizeBody();
            }

            function setButtonSideBar() {
                controller.adTemplate = 'views/ads/ad-holder.html';
                controller.sideBarTemplate = 'views/sidebar/games.html';
                controller.sideBarSize = 'col-xs-4 col-sm-3 col-md-2';
                partialSizeBody();
            }

            setEmptySideBar();

            controller.logout = function () {
                setEmptySideBar();
                jtbPlayerService.signOutAndRedirect();
            };

            controller.toggleMenu = function () {
                controller.stopHoverMenu();
                controller.hideGames = !controller.hideGames;
                controller.forceShowGames = false;
                if (controller.hideGames) {
                    fullSizeBody();
                } else {
                    partialSizeBody();
                }
            };

            controller.hoverMenu = function () {
                if (controller.hideGames) {
                    controller.hideGames = false;
                    controller.forceShowGames = true;
                    partialSizeBody();
                }
            };

            controller.stopHoverMenu = function () {
                if (controller.forceShowGames) {
                    controller.hideGames = true;
                    controller.forceShowGames = false;
                    fullSizeBody();
                }
            };

            $rootScope.$on('playerLoaded', function () {
                setButtonSideBar();
                angular.copy(jtbPlayerService.currentPlayer(), controller.player);
                controller.showLogout = controller.player.source === 'MANUAL';
                controller.showAdmin =
                    controller.player.adminUser ||
                    controller.showAdmin;  //  Once an admin always an admin for ui
            });
        }
    ]
);
