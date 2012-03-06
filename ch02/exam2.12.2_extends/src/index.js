
my_extend = Ext.extend(Ext.Panel,{
    my_id: '',
    
    my_count: 1,
    
    my_state: 'SMILE ^^',
    
    setState:function(input)
    {
        if(input == 0)
            this.my_state = "SMILE ^^";
        else 
            this.my_state = "CRY TT";
    },
    getState:function()
    {
        return this.my_state;
    },
    initComponent:function(){
        Ext.apply(this, {
            text:'Extend ��ư',
            width:250,
            height:50,
        });
        my_extend.superclass.initComponent.apply(this,arguments);
        
        this.on('tap', function(){
            alert("�ش� �ʵ� [" + Ext.getCmp(this.mytextid).getName() + "]�� ���� �����մϴ�.");
            Ext.getCmp(this.mytextid).setValue('Extend�κ��� �� ����');
        });
        this.addEvents('myeventsmile');
        this.addEvents('myeventcry');
        this.addListener({
            body:{
                tap:function(e){
                    
                    if(this.my_count == 1)
                    {
                        this.setState(this.my_count);
                        this.my_count = 0;                      
                        this.fireEvent('myeventsmile', e.type,e);                       
                    }
                    else if(this.my_count == 0)
                    {
                        this.setState(this.my_count);
                        this.my_count = 1;
                        this.fireEvent('myeventcry', e.type,e);                     
                    }
                },
                scope:this,
            }
        });
    }
});
Ext.reg('my_extend_type', my_extend);

var MyExtendComp = new  my_extend();
MyExtendComp.update("����̺�Ʈ (Ŭ��!)");
MyExtendComp.addListener({
    myeventsmile:function()
    {
        Ext.getCmp("test").setValue(this.getState());
    },
    myeventcry:function()
    {
        Ext.getCmp("test").setValue(this.getState());
    }
});

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,

    onReady: function() {
        
        new Ext.Panel({
            fullscreen: true,
            id: 'content',
            scroll: 'vertical',

            layout: {
                type: 'vbox',
                pack: 'center',
            
            },            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                title:'Extend & Event',
            }],
            
            items:[
            {
                xtype:'fieldset',
                title:'Extend ��ü���� �̺�Ʈ ����',
                width:300,
                height:400,
                layout: {
                    type: 'vbox',
                    pack: 'center', 
                    labelwidth:'40%',           
                },              
                items:[             
                {
                    xtype:'textfield',
                    id:'test',
                    label:'���ް�'
                }]
            },
            MyExtendComp,]
            
        });
    }
});
