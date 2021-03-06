package com.jtbdevelopment.TwistedStarterBase.dao

import com.jtbdevelopment.TwistedStarterBase.state.GameFeature
import com.jtbdevelopment.TwistedStarterBase.state.TSBGame
import com.jtbdevelopment.games.mongo.dao.AbstractMongoMultiPlayerGameRepository
import groovy.transform.CompileStatic

/**
 * Date: 7/13/16
 * Time: 7:13 PM
 */
@CompileStatic
interface GameRepository extends AbstractMongoMultiPlayerGameRepository<GameFeature, TSBGame> {
}

