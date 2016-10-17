<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<h2>카드등록</h2>
<div class="box">
<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
</div>

<div id="id01" class="modal" style="overflow-y:hidden;overflow-x:hidden;">
  
  <form class="modal-content animate" action="action_page.php">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div style="margin: 50px;">
       <div >
              <h4><img src="resources/img/member/tit_member_card1.png" alt="결제카드등록" />
              </h4>
              <div>
                <table style="width: 0" class="rows">

                <tr>
                  <th>카드종류</th>
                  <td>
                    <span>
                      <input type="radio" id="type1" name="driverType" checked="checked" /> 법인
                      <input type="radio" id="type2" name="driverType" /> 개인 <br />
                     <em style='font-size: 12px; color:#999;'>본인명의의 카드를 사용하세요!!</em> 
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>카드번호</th>
                  <td>
                    
                    <input id="license_num1" maxlength="4" type="text" class="input" style="width:40px" value="" />
                    <span>-</span>
                    <input id="license_num2" maxlength="4" type="text" class="input" style="width:40px" value="" />
                    <span>-</span>
                    <input id="license_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />
                    <span>-</span>
                    <input id="license_num3" maxlength="4" type="text" class="input" style="width:40px" value="" />
                    
                  </td>
                </tr>
                <tr>
                  <th>유효기간</th>
                  <td>
                     <select id="license_loc" style="width:100px">
                      <option selected="selected" value="2016년">2016년</option>
                      <option value="2017년">2017년</option>
                      <option value="2018년">2018년</option>
                      <option value="2019년">2019년</option>
                      <option value="2020년">2020년</option>
                      <option value="2021년">2021년</option>
                      <option value="2022년">2022년</option>
                      <option value="2023년">2023년</option>
                      <option value="2024년">2024년</option>
                      <option value="2025년">2025년</option>
                      <option value="2026년">2026년</option>
                      <option value="2027년">2027년</option>
                      <option value="2028년">2028년</option>
                      <option value="2029년">2029년</option>
                      <option value="2030년">2030년</option>
                      <option value="미친년">미친년</option>
                     </select> 
                  
                  
                  <select id="license_loc" style="width:70px">
                      <option selected="selected" value="1월">1월</option>
                      <option value="2월">2월</option>
                      <option value="3월">3월</option>
                      <option value="4월">4월</option>
                      <option value="5월">5월</option>
                      <option value="6월">6월</option>
                      <option value="7월">7월</option>
                      <option value="8월">8월</option>
                      <option value="9월">9월</option>
                      <option value="10월">10월</option>
                      <option value="11월">11월</option>
                      <option value="12월">12월</option>
                      
                    </select> 
                  
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <input placeholder="6자리입력" id="license_num1" maxlength="6" type="text" class="input" style="width:70px" value="" />
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <input placeholder="앞2자리" id="license_num1" maxlength="2" type="text" class="input" style="width:60px" value="" />
                  <span>**</span>
                  </td>
                </tr>
                </table>
              </div>
      <br />
      <span>
      <button class="card_button" type="submit">카드등록</button><br />
      <button class="card_cancelbtn" type="button" onclick="document.getElementById('id01').style.display='none'" >취소</button><br /><br />
      </span>
      
    </div></div>

    
      
    
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>


