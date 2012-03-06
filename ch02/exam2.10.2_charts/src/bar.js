Ext.ns("bar");

bar.init = function() {

    window.store1 = new Ext.data.JsonStore({
        fields: ['�̸�', '����', '����', '����'],

        data:[{ '�̸�':'����', '����':60,  '����':60,  '����':80  },
              { '�̸�':'ö��', '����':50,  '����':90,  '����':70  },
              { '�̸�':'����', '����':100, '����':100, '����':90  },
              { '�̸�':'����', '����':100, '����':90,  '����':100 }]
    });


    bar.panel = new Ext.chart.Panel({
        fullscreen: true,
        title: 'BAR Chart',
       
        items: {
            cls: 'bar1',
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
            
            axes: [            
            {
                type: 'Numeric',
                position: 'left',
                fields: ['����', '����', '����'],
                title:'����',
                minimum: 0,
                maxinum:100,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['�̸�'],
                title: '����ǥ',
            }], 
            series: [{
                type: 'bar',
                highlight: false,
                axis: 'left',
                xField:'�̸�',
                yField: ['����','����','����']
            }]
        }
    });
}
