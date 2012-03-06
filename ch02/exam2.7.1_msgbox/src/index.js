Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        panel = new Ext.Panel({
        
            fullscreen:true,
            layout: {
                type: 'vbox',
                pack: 'center',         
            },
            items:[
            { 
                xtype:'spacer'
            },{
                xtype:'button',
                width:200,
                text:'���â',
                handler:function(){
                    Ext.Msg.alert('���','���â�Դϴ�.', 
                    panel.resultMsg);
                }
            },{ 
                xtype:'spacer'
            },{
                xtype:'button',
                width:200,
                text:'������Ʈ',                
                handler:function(){
                    Ext.Msg.prompt('����','��ȭ��ȣ�� �Է��ϼ���?', 
                    panel.resultMsg);
                }
            },{ 
                xtype:'spacer'
            },{
                xtype:'button',
                width:200,
                text:'Ȯ��â',
                handler:function(){
                    Ext.Msg.confirm('Ȯ��','���б� ��ϱ��� ������ �Ѵٰ� �����մϱ�?', 
                        panel.resultMsg);
                }
            },{ 
                xtype:'spacer'
            }],
            resultMsg:function(btn,text)
            {
                alert(btn + ":" + text);
            }           
        });   
    }
});
