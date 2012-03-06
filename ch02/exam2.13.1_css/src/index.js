Ext.ns("scrollList");

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        Ext.regModel('friend', {
            fields: ['write_time', 'friend_class', 'name', 'write']
        });
        
        var orgData= [{write_time: '09/20 11:11:11', name: '�̺���', write:'�ȳ��ϼ��� ������ ������ ���׿�' },
                      {write_time: '09/20 11:12:11', name: '�ּ���', write:'�� �´ٳ׿�'},
                      {write_time: '09/20 11:13:22', name: '�̺���', write:'������ �������� ���ڳ�'},
                      {write_time: '09/20 11:14:33', name: '�ּ���', write:'���� ��ũ�� ���µ�....����'},
                      {write_time: '09/20 11:15:11', name: '�質��', write:'���� ��������...'},
                      {write_time: '09/20 11:17:05', name: '�ּ���', write:'��~~ ���õ� �߱��ε�..'}];
		// �߰��� ����Ÿ �������� ��Ž� Ajax�� ��� �޾ƿ� ����Ÿ�� �ӽ÷� ����.                   
        var addData= [{write_time: '09/20 11:21:55', name: '�質��', write:'��� �����߾��..'},
                      {write_time: '09/20 11:22:43', name: '�̺���', write:'12�ñ��� ���̱�� ���ݾ�!!'},
                      {write_time: '09/20 11:23:56', name: '�̺���', write:'�����ֵ� ȸ�� �߰�!!'},
                      {write_time: '09/20 11:24:00', name: '�質��', write:'�׷��� ��� �־��..'}];
        
        var store =   new Ext.data.Store({
                model: 'friend',
                sorters: 'wirte_time',                
                data: orgData,
                autoLoad:true,
               
            });             

	
		var friend_list = new Ext.List({
			name:'friend_list',
			blockRefresh:true,

			height:350,
			
			itemTpl: '<div><table><tr><td><img src="./img/{name}.png" width="35", height="50">&nbsp;&nbsp;</td><td>{write}<BR><small> {write_time} �̸�: {name} </small></td></tr></table> </div>',
	
            store:store,

    	});
		    	
        scrollList.panel = new Ext.Panel({
            fullscreen: true,
            html:'<BR><font size="2">����Ʈ�� �Ʒ��� �巡�� �ϸ� ����Ÿ�� �߰��մϴ�.',
			
			dockedItems :[
			{
	            dock: 'top',
	            xtype: 'toolbar',
	            title:'�׸� �׽�Ʈ',
	            items: [{
	                text: '�����׽�Ʈ',
	                handler: function(btn,event){
	                    friend_list.scroller.scrollTo({x:0,y:0});
	                }
	            }]
	        },
			{
	            dock: 'bottom',
	            xtype: 'toolbar',	            
	            title:'Theme Test',
	            ui:'light',
	            items: [{
	                text: 'Theme',
	            }]
	        }],
            items: [friend_list,
            		{
            			xtype:'button',
            			text:'��ư',
            			
            		}
           	],
            addScrollList:function(a,b)
            {
            	console.log(a);
            	console.log(b);
            	if(b.offset <= 0)
            		store.add(addData);
            }
        });   
     	friend_list.scroller.on('bouncestart', scrollList.panel.addScrollList, this);     	
	}
});
