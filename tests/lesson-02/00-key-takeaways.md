# Version Control System
* Distributed Version Control System - Git

* Sự khác nhau giữa Git và GitHub

* Git Three states (Working Directory; Staging area; Repository)

* Di chuyển và submit file từ local repository sang các state cũng như submit lên GitHub
    * git init
    * git add . / git add <tên file>
    * git commit -m"message"
    * git push origin main
* Tổng hợp lại các câu lệnh của Git bao gồm tạo repo GitHub và liên kết repo local - git remote add origin <url>
* Cấu hình git giữa global và local:
    * Command cho Global:
        * git config --global user.name “Tên bạn”
        * git config --global user.email “email của bạn” 
    * Command cho local:
        * git config user.name “Tên bạn”
        * git config user.email “email của bạn”
* Các câu lệnh khác của Git:
    * git status - xem trạng thái các file đang ở state nào (xanh - staging; đỏ - working directory)
    * git log - xem danh sách các commit



