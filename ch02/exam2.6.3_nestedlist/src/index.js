Ext.setup({
    glossOnIcon: true,    
    fullscreen:true,
    onReady: function()
    {       
        var data = {
            text: '������',
            items: [
            {
                text: '����������...',
                items: [
                {
                    text: '�������',
                    items: [
                    {
                        text: '�̹� <img src="./img/�̹�.png" height="50"> ',

                    },
                    {
                        text: '���� <img src="./img/����.png" height="50"> ',

                    }]
                },{
                    text: '��������',
                    items: [
                    {
                        text: '���� <img src="./img/����.png" height="50"> ',

                    },
                    {
                        text: '���� <img src="./img/����.png" height="50"> ',

                    }]
                }]
            },
            {
                text: '�Ѿ翡����...',
                items: [
                {
                    text: '���� <img src="./img/����.png" height="50"> ',

                }]
            }]
        };
   

        Ext.regModel('menuList', {
            fields: [{name: 'text', type: 'string'}]
        });

        var store = new Ext.data.TreeStore({
            model: 'menuList',
            root: data,

            proxy: {
            	//url:'temp.html',
                type: 'ajax',
                reader: {
                    type: 'tree',
                    root: 'items'
                }
            }

            
        });

        var nestedList = new Ext.NestedList({      
            fullscreen: true,  
            title:"������",
            displayField: 'text',
            store: store,

        });
 
         nestedList.on('leafitemtap', function(subList, subIdx, el, e, detailCard) {
			alert('����̿�...');	
			/*
			console.log(subList);
			console.log(subIdx);
			console.log(el);
			console.log( e);
			console.log( detailCard);
			*/
			
        });    
        new Ext.Panel({
            fullscreen: true,  
            items:nestedList
           
        });
        
    	function resultMsg(btn,text)
    	{
    		
    	}        
    }
   
   
});