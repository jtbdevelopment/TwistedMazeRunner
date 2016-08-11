package com.jtbdevelopment.TwistedWordSearch.rest.services

import com.jtbdevelopment.TwistedWordSearch.rest.data.GameFeatureInfo
import com.jtbdevelopment.TwistedWordSearch.state.GameFeature

/**
 * Date: 7/18/16
 * Time: 4:14 PM
 */
class TWSPlayerGatewayServiceTest extends GroovyTestCase {
    TWSPlayerGatewayService service = new TWSPlayerGatewayService()

    void testFeaturesAndDescriptions() {
        assert [
                new GameFeatureInfo(
                        GameFeature.Option1,
                        [
                                new GameFeatureInfo.Detail(GameFeature.Choice1),
                                new GameFeatureInfo.Detail(GameFeature.Choice2),
                                new GameFeatureInfo.Detail(GameFeature.Choice3),
                        ]
                ),
                new GameFeatureInfo(
                        GameFeature.Option2,
                        [
                                new GameFeatureInfo.Detail(GameFeature.Option2Yes),
                                new GameFeatureInfo.Detail(GameFeature.Option2No),
                        ]
                ),
                new GameFeatureInfo(
                        GameFeature.Option3,
                        [
                                new GameFeatureInfo.Detail(GameFeature.Solo),
                                new GameFeatureInfo.Detail(GameFeature.Collaborate),
                                new GameFeatureInfo.Detail(GameFeature.Compete),
                        ]
                ),
        ] == service.featuresAndDescriptions()
    }
}
