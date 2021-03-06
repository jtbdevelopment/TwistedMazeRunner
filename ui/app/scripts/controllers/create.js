'use strict';

angular.module('tsbUI').controller('CreateGameCtrl',
    [
        'jtbAppLongName', 'jtbGameFeatureService', 'jtbPlayerService', 'jtbBootstrapGameActions', '$uibModal',
        function (jtbAppLongName, jtbGameFeatureService, jtbPlayerService, jtbBootstrapGameActions, $uibModal) {
            var controller = this;

            controller.features = [];
            controller.choices = {};

            controller.createGameButtonText = 'Create Game';
            controller.disableCreate = false;

            //  sets chosenFriends, invitableFBFriends and friends
            jtbPlayerService.initializeFriendsForController(controller);

            jtbGameFeatureService.features().then(
                function (features) {
                    var trackingGroup = {};
                    angular.forEach(features, function (feature) {
                        var group = feature.feature.groupType;
                        if (angular.isUndefined(trackingGroup[group])) {
                            var groupDetails = {group: group, features: []};
                            trackingGroup[group] = groupDetails;
                            controller.features.push(groupDetails);
                        }

                        var newFeature = {
                            feature: feature.feature.feature,
                            label: feature.feature.label,
                            description: feature.feature.description,
                            options: []
                        };

                        angular.forEach(feature.options, function (option) {
                            var item = {
                                feature: option.feature,
                                label: option.label,
                                description: option.description,
                                icon: undefined
                            };
                            //  TODO - define icons and alternate labels here
                            newFeature.options.push(item);
                        });

                        trackingGroup[group].features.push(newFeature);
                        controller.choices[newFeature.feature] = newFeature.options[0].feature;
                    });
                });

            controller.inviteFriends = function () {
                $uibModal.open({
                    templateUrl: 'views/core-bs/friends/invite-friends.html',
                    controller: 'CoreBootstrapInviteCtrl',
                    controllerAs: 'invite',
                    size: 'lg',
                    resolve: {
                        invitableFriends: function () {
                            return controller.invitableFBFriends;
                        },
                        message: function () {
                            return 'Come play ' + jtbAppLongName + ' with me!';
                        }
                    }
                });
            };

            controller.createGame = function () {
                controller.createGameButtonText = 'Creating game...';
                controller.disableCreate = true;

                var featureSet = [];
                angular.forEach(controller.choices, function (value) {
                    featureSet.push(value);
                });
                var players = controller.chosenFriends.map(function (player) {
                    return player.md5;
                });
                var playersAndFeatures = {'players': players, 'features': featureSet};
                jtbBootstrapGameActions.new(playersAndFeatures);
            };
        }
    ]
);