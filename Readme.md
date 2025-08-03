<!-- This Info About pj -->


<!-- Color Platte -->
#f1f1f1 
#fdb827 
#21209c 
#23120b

#e0e0e0

<!-- UML -->
1. Use Case Diagram
[Student] ─────► (Register/Login)
              └──► (Search Rooms)
              └──► (Request Booking)
              └──► (Send Message to Owner)
              └──► (Leave Review)
              └──► (Report Room)

[Owner] ──────► (Register/Login)
             └──► (List a Room)
             └──► (Manage Bookings)
             └──► (Chat with Students)
             └──► (Accept/Reject Booking)

[Admin] ──────► (Manage Users)
             └──► (Manage Listings)
             └──► (Moderate Reviews)

2. Class Diagram
┌─────────────┐
│ User        │
├─────────────┤
│ id          │
│ name        │
│ email       │
│ password    │
│ role        │ ("student" / "owner" / "admin")
└─────────────┘
        ▲
        │
        │
┌─────────────┐         ┌──────────────┐
│ Room        │◄───────│ RoomImage     │
├─────────────┤         ├──────────────┤
│ id          │         │ id           │
│ ownerId     │         │ roomId       │
│ title       │         │ url          │
│ price       │         └──────────────┘
│ location    │
│ capacity    │
│ available   │
└─────────────┘

┌──────────────┐
│ Booking      │
├──────────────┤
│ id           │
│ studentId    │
│ roomId       │
│ status       │ (pending/accepted/rejected)
│ dateFrom     │
│ dateTo       │
└──────────────┘

┌──────────────┐
│ Message      │
├──────────────┤
│ id           │
│ senderId     │
│ receiverId   │
│ content      │
│ timestamp    │
└──────────────┘

┌──────────────┐
│ Review       │
├──────────────┤
│ id           │
│ studentId    │
│ roomId       │
│ rating       │
│ comment      │
└──────────────┘


3. Sequence Diagram (طلب حجز غرفة)
Student → App: يطلب حجز غرفة
App → API: إرسال الطلب (roomId + studentId)
API → DB: حفظ الطلب مع status = "pending"
API → Owner: إشعار بوجود حجز جديد
Owner → App: قبول أو رفض
App → API: تحديث حالة الحجز
API → DB: status = accepted/rejected
App → Student: إشعار بالنتيجة


4. Activity Diagram (تصفح وحجز غرفة)
[Start]
  ↓
[User opens App]
  ↓
[Is logged in?] ── No ──► [Show login/register screen]
        │
       Yes
        ↓
[Choose: Search Rooms]
        ↓
[Filter by location, price, etc.]
        ↓
[View Room Details]
        ↓
[Request Booking]
        ↓
[Wait for Owner response]
        ↓
[Receive Accepted/Rejected]
        ↓
[End]

