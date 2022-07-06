<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src='${pageContext.request.contextPath }/jquery/jquery-3.6.0.js'></script>
<script>
	$(function() {
		$("button").click(function() {
			$("p").load('${pageContext.request.contextPath}/api/html p');
		});
	});
</script>
</head>
<body>
	<h1>AJAX test: HTML format Data</h1>
	<button>변경</button>
	<p>변경 전</p>
</body>
</html>