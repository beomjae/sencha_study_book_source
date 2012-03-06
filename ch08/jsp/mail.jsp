<%@ page contentType="text/html;charset=euc-kr"  pageEncoding="euc-kr" %>

<%@ page import="javax.mail.*" %>
<%@ page import="javax.mail.internet.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>

<%@ page import="java.util.Hashtable" %>
<%@ page import="java.util.Properties" %>
<%@ page import="javax.naming.Context" %>
<%@ page import="javax.naming.InitialContext" %>
<%@ page import="javax.naming.InitialContext" %>

<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException" %>

<%

response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

Connection conn = null;
Statement stmt = null;
ResultSet rs = null;

String returnStr="";
String err="'err':''";
String emailList = "'emailList':''";
String userId = "";
String email="";
String emailPwd="";
try
{
    try
    {
        userId =  (String)session.getAttribute("userId");
    }
    catch(Exception ex)
    {
    	//����ó�� �ӽ����
    }   
    userId = "01234567";  
    Class.forName("com.mysql.jdbc.Driver");
    conn = DriverManager.getConnection(
        "jdbc:mysql://127.0.0.1:3306/books?useUnicode=true&characterEncoding=euckr", 
        "root", 
        "1234");
    stmt = conn.createStatement();
    String sql = "select email, email_pwd from users where user_id = '" + userId + "'";
    rs= stmt.executeQuery(sql);
    int i=0;
    if(rs.next())
    { 
        email=rs.getString("email");
        emailPwd= rs.getString("email_pwd");    
    }
    else    
    {       
        err = "'err': '�ش� ������ �������� �ʽ��ϴ�.'";
    }
}
catch(Exception e)
{
	if(err.trim().length() == 0)
    	err = "'err': '" + e.toString() + "'";
}
finally
{
    try{ rs.close();}catch(Exception exRs){}
    try{ stmt.close();}catch(Exception exStmt){}
    try{ conn.close();}catch(Exception exConn){}
}

// MailList ��������
String hostName = "pop.naver.com";
Properties props = new Properties();
Session sessionMail = Session.getDefaultInstance(props, null);
Store store = null;
Folder folder = null;
StringBuffer tempList = new StringBuffer();
try
{
    // Get the store
    
    store = sessionMail.getStore("pop3");
    store.connect(hostName, email, emailPwd);
    folder = store.getFolder("INBOX");
    folder.open(Folder.READ_ONLY);
    Message message[] = folder.getMessages();
    int messageLength = 0;
    int max_cnt = 10;
    messageLength = message.length;
    
    int i=0;
    for (i=0; i< message.length && i< max_cnt; i++) {
    if(i !=0)
    {
        tempList.append(",");
    }
    tempList.append("{'subject':'").append(message[i].getSubject()).append("'}");
    }
    if(i==0)
    {
        err = "'err': '������ �����ϴ�.'";
    }
    folder.close(false);
    store.close();
}
catch (Exception e)
{
    err = "'err': '" + e.toString() + "'";
    System.out.println(e.toString());
}
    
emailList = "'email_list':[" + tempList.toString() + "]";
returnStr = "{'data':{" + emailList + "," + err + "}}";

//��������� ȭ�鿡 ���
out.println(returnStr.replace('\'','\"').trim());
%>

