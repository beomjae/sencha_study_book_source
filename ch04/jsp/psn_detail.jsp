<%@ page contentType="text/html;charset=euc-kr"  pageEncoding="euc-kr" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException" %>
<%
String returnStr="";
String err="'err':''";
String psnDetail = "'psn_detail':''";
Connection conn = null;
Statement stmt = null;
ResultSet rs = null;
try
{    
    // �Ķ���� �ޱ�
    request.setCharacterEncoding("euc-kr");
    String userId = request.getParameter("user_id");
    Class.forName("com.mysql.jdbc.Driver");
    
    conn = DriverManager.getConnection(
        "jdbc:mysql://127.0.0.1:3306/books?" 
            + "useUnicode=true&characterEncoding=euckr", 
        "root", 
        "1234");
    stmt = conn.createStatement();
    String sql = "select user_id, user_name, tel, adr from users" + 
        " where user_id = '" + userId + "'";

    rs= stmt.executeQuery(sql);
    
    StringBuffer tempData = new StringBuffer();
    int i=0;
    if(rs.next())
    { 
        tempData.append("{")
                .append("'user_id':'")
                .append(rs.getString("user_id")).append("',")
                .append("'user_name':'")
                .append(rs.getString("user_name")).append("',")
                .append("'tel':'")
                .append(rs.getString("tel")).append("',")
                .append("'adr':'")
                .append(rs.getString("adr")).append("'")
                .append("}");
    }
    else    
    {       
        err = "'err': '�ش� ������ �������� �ʽ��ϴ�.'";
    }
    psnDetail = "'psn_detail':" + tempData.toString() + "";
}
catch(Exception ex)
{
    System.out.println(ex.toString());
    err = "'err': '����.. ������ ó��'";
}
finally
{
    try{ rs.close();}catch(Exception exRs){}
    try{ stmt.close();}catch(Exception exStmt){}
    try{ conn.close();}catch(Exception exConn){}
}
returnStr = "{'data':{" + psnDetail + "," + err + "}}";
out.println(returnStr.replace('\'','\"').trim());
%>
