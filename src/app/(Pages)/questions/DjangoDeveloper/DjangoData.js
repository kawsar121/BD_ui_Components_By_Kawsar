const DjangoData = [
  {
    id: 1,
    question: "Django কি?",
    answer: "Django হলো Python ভিত্তিক high-level web framework। apid development possible | Security built-in (XSS, CSRF, SQL injection protection) | MVC / MVT architecture follow করে"
  },
  {
    id: 2,
    question: "Django এর MVC এবং MVT এর পার্থক্য?",
    answer: "MVC: Model – View – Controller | MVT (Django): Model – Template – View | 1)Model → Database structure  2)Template → HTML, UI  3)View → Controller এর কাজ করে, request handle করে"
  },
  {
    id: 3,
    question: "Django এর advantages কী কী?",
    answer: "Rapid development | Security features built-in | Scalable & maintainable |  ORM support (SQL queries Python object দিয়ে করা যায়) | Admin panel auto generate হয়"
  },
  {
    id: 4,
    question: "Django Models কি?",
    answer: "Models হলো Python class যা database table represent করে।  1)Field দ্বারা column define করা হয়  2)ORM দিয়ে CRUD করা যায় | উদাহরণ: class Student(models.Model): name = models.CharField(max_length=100) age = models.IntegerField()"
  },
  {
    id: 5,
    question: "Django ORM কি?",
    answer: "ORM (Object Relational Mapping) হলো Python object দিয়ে database এর query করা। 1)No need to write raw SQL                                                            2)Example: Student.objects.all(), Student.objects.filter(age__gt=18)"
  },
  {
    id: 6,
    question: "Django URL Dispatcher কি?",
    answer: "URL Dispatcher বা URL Routing হলো Django এর system যা request কে ঠিক view function এ পাঠায়। urls.py এ URL pattern define করা হয় | উদাহরণ: urlpatterns = [path('students/', views.student_list),]"
  },
  {
    id: 7,
    question: "Django Views কি?",
    answer: "View হলো function/class যা request handle করে এবং response return করে।        1)Example: function-based view (FBV)                                                   2)Example: class-based view (CBV)"
  },
  {
    id: 8,
    question: "Difference between ForeignKey, OneToOneField, ManyToManyField?",
    answer: "1)ForeignKey: one-to-many relationship  2)OneToOneField: one-to-one relationship   3)ManyToManyField: many-to-many relationship"
  },
  {
    id: 9,
    question: "Django Form এবং ModelForm এর পার্থক্য?",
    answer: "1)Form: manually fields define করতে হয়  2)ModelForm: automatically model এর fields নিয়ে form create হয়"
  },
  {
    id: 10,
    question: "Django ORM Query Types?",
    answer: "1)all() → সব records  2)filter() → condition অনুযায়ী  3)exclude() → বাদ দিয়ে select  4)get() → single record  5)order_by() → sort  6)values() → dictionary format"
  }
];

export default DjangoData;