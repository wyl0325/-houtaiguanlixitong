<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json'
export default {
  data() {
    return {

    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('main'))
    this.$echarts.registerMap('china', geoJson)
    let option = {
      backgroundColor: 'rgb(121,145,209)',
      gep: {
        map: 'china',
        aspectScale: 0.75,
        zoom: 1.1,
        itemStyle: {

          normal: {
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: '#09132c'
              }, {
                offset: 1,
                color: '#274d68'
              }],
              globalCoord: true
            },
            shadowColor: 'rgb(58,115,192)',
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          }
        },
        regions: [{
          name: '南海诸岛',
          itemStyle: {
            opacity: 0
          }
        }]
      },
      series: [
        {
          type: 'map',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#1DE9B6'
              }
            }, emphasis: {
              textStyle: {
                color: 'rgb(183,185,14)'
              }
            }
          },
          zoom: 1.1,
          map: 'china',
          itemStyle: {
            normal: {
              backgroundColor: 'rgb(147,235,248)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgb(31,54,150)'
                }, {
                  offset: 1,
                  color: 'rgb(89,128,142)'
                }],
                globalCoord: true
              }
            },
            emphasis: {
              areaColor: 'rgb(46,229,206)'
            }
          },
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style lang="less">
.map-view {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>