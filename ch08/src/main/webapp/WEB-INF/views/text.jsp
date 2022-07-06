<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src='/ch08/jquery/jquery-3.6.0.js'></script>
<script>
	$(function() {
		$("button").click(function() {
			$("p").load('${pageContext.request.contextPath}/api/text');
		});
	});
</script>
</head>
<body>
	<h1>AJAX test: text format Data</h1>
	<button>변경</button>
	<p>변경 전</p>
</body>
</html>