Ext.ns("pie");

pie.init = function() {
    window.store1 = new Ext.data.JsonStore({
        fields: ['�̸�', '����', '����', '����'],

        data:[{ '�̸�':'����', '����':60,  '����':60,  '����':80  },
              { '�̸�':'ö��', '����':50,  '����':90,  '����':70  },
              { '�̸�':'����', '����':100, '����':100, '����':90  },
              { '�̸�':'����', '����':100, '����':90,  '����':100 }]
    });

    pie.panel = new Ext.chart.Panel({
        fullscreen: true,
        title: 'PIE Chart',

        items: {
            cls: 'pie1',
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
                type: 'pie',
                field: '����',
                highlight: false,
                donut:25,
                showInLegend: true,
                label:{
                    field:'�̸�'
                }
            }]
        }
    });
}
