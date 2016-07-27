package com.jtbdevelopment.TwistedWordSearch.player

import com.jtbdevelopment.games.players.GameSpecificPlayerAttributes
import com.jtbdevelopment.games.players.GameSpecificPlayerAttributesFactory
import groovy.transform.CompileStatic
import org.springframework.stereotype.Component

/**
 * Date: 2/2/15
 * Time: 5:37 PM
 */
@Component
@CompileStatic
class TWSPlayerAttributesFactory implements GameSpecificPlayerAttributesFactory {
    @Override
    GameSpecificPlayerAttributes newPlayerAttributes() {
        return new TWSPlayerAttributes()
    }

    @Override
    GameSpecificPlayerAttributes newManualPlayerAttributes() {
        return new TWSPlayerAttributes()
    }

    @Override
    GameSpecificPlayerAttributes newSystemPlayerAttributes() {
        return null
    }
}
