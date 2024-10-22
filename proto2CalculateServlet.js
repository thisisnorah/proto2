import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/calculate")
public class CalculateServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        String function = request.getParameter("function");
        double variable1 = Double.parseDouble(request.getParameter("var1"));
        double variable2 = Double.parseDouble(request.getParameter("var2"));
        double variable3 = Double.parseDouble(request.getParameter("var3"));
        double dosage = 0;

        // 선택된 함수에 따라 계산
        switch (function) {
            case "med_name1":
                dosage = (variable1 + variable2) * variable3;  // 예시 계산
                break;
            case "med_name2":
                dosage = variable1 * variable1 + variable2 * variable2 + variable3 * variable3;  // 예시 계산
                break;
            case "med_name3":
                dosage = variable1 / (variable2 + variable3);  // 예시 계산
                break;
            case "med_name4":
                dosage = (variable1 + variable2) - variable3;  // 예시 계산
                break;
            case "med_name5":
                dosage = (variable1 * variable3) - variable2;  // 예시 계산
                break;
            case "med_name6":
                dosage = (variable1 + variable2 + variable3) / 3;  // 예시 계산
                break;
            case "med_name7":
                dosage = variable1 * variable2 * variable3;  // 예시 계산
                break;
            case "med_name8":
                dosage = variable1 + variable2 - variable3;  // 예시 계산
                break;
            case "med_name9":
                dosage = variable1 - variable2 * variable3;  // 예시 계산
                break;
            case "med_name10":
                dosage = (variable1 + variable2) / variable3;  // 예시 계산
                break;
            default:
                dosage = 0;
        }

        // 결과 출력
        out.print(dosage);
    }
}
