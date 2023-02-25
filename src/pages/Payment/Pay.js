import React from "react";

const Pay = () => {
    return(
        <>
        <div class="pay" dir="rtl">
        <div class="head d-flex align-items-center back-color py-3">
            <a href="/home" class="pt-2 pe-3"><i class="fa-solid fa-arrow-left text-white"></i></a>
            <div class="mx-auto text-center text-white fs-5">
                الدفع
            </div>
        </div>
        <div class="container py-5">
            <p class="lead">قم بتحويل 50% من رسوم الحجز عن طريق بنكك (بنك الخرطوم) على الحساب <span>1625516 </span>باسم <span>محمد عمر </span>وانسخ رقم العملية لارفاقه ادناه</p>

            <form action="">
                <h4 class="main-color"> تفاصيل العملية</h4>
                <label for="" class="black my-2">اسم العميل</label>
                <input type="text" class="form-control" placeholder="اسم العميل" required></input>
                <label for="" class="black my-2">البريد الالكتروني</label>
                <input type="email" class="form-control" placeholder="البريد الالكتروني للعميل" required></input>
                <label for="" class="black my-2">المبلغ الكلي للحجز</label>
                <input type="text" class="form-control" placeholder="1,000,000 - اي مليون جنيه" readOnly></input>
                <label for="" class="black my-2">المبلغ الذي يجب ارساله</label>
                <input type="text" class="form-control" placeholder="500,000 - اي نصف مليون جنيه" readOnly></input>
                <label for="" class="black my-2">رقم عملية الدفع من بنكك</label>
                <input type="text" class="form-control" placeholder="على سبيل المثال 3111012345" required></input>
    
                <input type="submit" value="ادفع" class="btn my-4 py-2 fw-bold back-color text-white" data-bs-toggle="modal" data-bs-target="#popup"></input>
            </form>
        </div>

        <div class="modal fade" id="popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header back-color">
                    <button type="button" class="btn-close red" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center">
                    <p class="black fs-5">سيصلك اشعار خلال اليوم يؤكد عملية الحجز</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn back-color text-white" data-bs-dismiss="modal">حسناً</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Pay;