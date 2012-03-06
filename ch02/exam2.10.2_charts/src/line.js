Ext.ns("line");

line.init = function() {

    window.store1 = new Ext.data.JsonStore({
        fields: ['�̸�', '����', '����', '����'],

        data:[{ '�̸�':'����', '����':60,  '����':60,  '����':80  },
              { '�̸�':'ö��', '����':50,  '����':90,  '����':70  },
              { '�̸�':'����', '����':100, '����':100, '����':90  },
              { '�̸�':'����', '����':100, '����':90,  '����':100 }]
    });

    line.panel = new Ext.chart.Panel({
        fullscreen: true,
        title: 'LINE Chart',
       
        items: {
            cls: 'area1',
            theme: 'Demo',
            store: store1,
            animate: true,
            legend: {
                position: {
                    portrait: 'bottom',
                    landscape: 'right'
                },
                labelFont: '20px Arial'
            },
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['����', '����', '����'],
                title: 'Number of Hits',
                minimum: 0,
                maxinum:100,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['�̸�'],
                title: '����ǥ'
            }],
            series: [{
                type: 'line',
                highlight: false,
                axis: 'left',
                xField: '�̸�',
                yField: '����',
                
                highlight: {
                        size: 7,
                        radius: 7
                },
                //fill: true,
                smooth: false,
            },
            {
                type: 'line',
                highlight: false,
                axis: 'left',
                xField: '�̸�',
                yField: '����',
                
                highlight: {
                        size: 7,
                        radius: 7
                },
                fill: true,
                smooth: true,
            },
            {
                type: 'line',
                highlight: false,
                axis: 'left',
                xField: '�̸�',
                yField: '����',
                
                highlight: {
                        size: 7,
                        radius: 7
                },
                fill: true,
                smooth: true,
            }]
        }
    });
}
