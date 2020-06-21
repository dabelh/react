import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const createOptions = (a) => Highcharts.chart('root', {

    title: {
        text: `corona cases in ${a.name}`
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Number of cases'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'corona cases'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0
        }
    },

    series: [
        a
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});;
export default function MyChart({a}) {
    return <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={createOptions(a)}
  />
</div>
}

