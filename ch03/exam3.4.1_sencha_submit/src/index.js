Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    
    onReady: function() {
        panel = new Ext.form.FormPanel({
            
            id:'panelsubmit',
            fullscreen:true,
            standardSubmit: false,
            
            items: [
            {
                xtype: 'fieldset',
                title: 'SUBMIT...',
                instructions: 'Submit �׽�Ʈ�Դϴ�.',
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '150'
                },  
                items:
                [
                {
                    xtype:'textfield',
                    name:'user_id',
                    label:'ID',                 
                },  
                {
                    xtype:'textfield',
                    name:'user_name',
                    label:'�̸�',
                },
                {
                    xtype:'button',
                    text:'submit',
                    handler:function()
                    {   
                        var form = Ext.getCmp('panelsubmit');           
                        form.submit({
                            url: "./submitdata.jsp",
                            waitMsg: 'waiting..',
                            success: function(result, request) {
                                console.log("����");
                                console.log(result);
                                console.log(request);
                                alert(request.success);
                            },
                            success1: function(result, request) {
                                console.log("����1");
                                console.log(result);
                                console.log(request);
                                alert(request.success);
                            },
                            failure:function(result, request) {
                                console.log("����");
                                console.log(result);
                                console.log(request);
                                alert("�������");
                            }               
                        });                 
                    }
                }]
            }]
        }); 
      
    }
});