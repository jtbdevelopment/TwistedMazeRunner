package com.jtbdevelopment.TwistedWordSearch.rest.data

import com.jtbdevelopment.TwistedWordSearch.state.GameFeature
import com.jtbdevelopment.TwistedWordSearch.state.GameFeatureGroupType
import groovy.transform.CompileStatic

/**
 * Date: 4/28/15
 * Time: 6:54 PM
 */
@CompileStatic
class GameFeatureInfo {
    static class Detail {
        @SuppressWarnings("GroovyUnusedDeclaration")
        Detail() {
        }

        Detail(final GameFeature feature) {
            this.feature = feature
            this.description = feature.description
            this.groupDefaultValueType = feature.groupDefaultValueType
            this.label = feature.label
            this.groupType = feature.groupType
            this.groupDefault = feature.groupDefault
        }

        boolean equals(final o) {
            if (this.is(o)) return true
            if (getClass() != o.class) return false

            final Detail detail = (Detail) o

            if (feature != detail.feature) return false

            return true
        }

        int hashCode() {
            return feature.hashCode()
        }

        final GameFeatureGroupType groupType
        final GameFeature feature
        final String label
        final String description
        final Class<?> groupDefaultValueType
        final Object groupDefault
    }

    final Detail feature
    final List<Detail> options = []

    @SuppressWarnings("GroovyUnusedDeclaration")
    GameFeatureInfo() {
    }

    public GameFeatureInfo(final GameFeature feature, final List<Detail> options) {
        this.feature = new Detail(feature)
        this.options.addAll(options)
    }

    boolean equals(final o) {
        if (this.is(o)) return true
        if (getClass() != o.class) return false

        final GameFeatureInfo that = (GameFeatureInfo) o

        if (options != that.options) return false
        if (feature != that.feature) return false

        return true
    }

    int hashCode() {
        return feature.hashCode()
    }
}