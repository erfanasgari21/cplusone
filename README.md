---
sidebar_position: 1
---

# معرفی مارک داون

*این متن برای آشنایی با نحوه‌ی نوشتن به زبان مارک‌دان و قالب استاندارد صورت سوال قرار گرفته است.*

*در ابتدا، محدودیت زمان و حافظه‌ی سوال در قالب زیر بیان شود.*

+ محدودیت زمان: ۱ ثانیه
+ محدودیت حافظه: ۲۵۶ مگابایت

----------
*در اینجا، متن صورت سوال نوشته شود.*

**تابع فیبوناچی**، تابعی معروف است که نمایش *بازگشتی* آن به این صورت است که هر جمله‌ی آن با توجه به دو جمله قبلی‌اش محاسبه می‌شود. (برای نوشتن رابطه‌های ریاضی می‌توانید از دستورات ریاضی $LaTeX$  استفاده کنید)
$$ fib(0) = fib(1) = 1 $$
$$ fib(n) = fib(n-1) + fib(n-2) $$

در جدول زیر نمونه‌هایی از ورودی و خروجی‌های این تابع داده شده است:

|        ورودی        |        خروجی       |
|:------------------:|:------------------:|
|         10         |          89        |
|         15         |         987        |

 **پیاده‌سازی بازگشتی:**
کد زیر که به زبان `C` نوشته شده است، این تابع را به صورت بازگشتی پیاده‌سازی می‌کند: (برای نوشتن inline code به این صورت عمل کنید: `inline code`)

```
int fib(int n)
{
	if(n==1 || n==0)
		return 1;
	return fib(n-1)+fib(n-2);
}
```



همان کد بالا که به وسیله‌ی tab مشخص شده:

	int fib(int n)
	{
		if(n==1 || n==0)
			return 1;
		return fib(n-1)+fib(n-2);
	}

همان کد بالا با استفاده از Syntax Highlighter:

```c
int fib(int n)
{
	if(n==1 || n==0)
		return 1;
	return fib(n-1)+fib(n-2);
}
```


امکان highlight کردن بخشی از کد:

    This word is <mark>highlighted</mark>!

موس را روی کلمه‌ی `int` ببرید:

```c
<mark title="نوع خروجی">int</mark> fib(int n)
{
	if(n==1 || n==0)
		return 1;
	return <mark>fib(n-1)+fib(n-2)</mark>;
}
```


رنگ‌های مختلف برای highlight:

```
<mark title="قرمز" class="red">red</mark>
<mark class="orange" title="نارنجی">orange</mark>
<mark class="yellow">yellow</mark>
<mark class="olive">olive</mark>
<mark class="green">green</mark>
<mark class="teal">teal</mark>
<mark class="blue">blue</mark>
<mark class="violet">violet</mark>
<mark class="purple">purple</mark>
<mark class="pink">pink</mark>
<mark class="brown">brown</mark>
<mark class="grey">grey</mark>
```



برای نمایش محتوا به صورت مخفی از تگ‌های  استفاده کنید.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$


حال، برنامه‌ای بنویسید که با گرفتن دو عدد طبیعی $n$ و $m$، مقادیر $\frac {fib(n)} m$ و $\frac n {fib(m)}$ را با دقیقاً ۶ رقم اعشار خروجی دهد.

# ورودی
*در این بخش قالب ورودی و محدودیت‌های آن توضیح داده شود.*

ورودی تنها شامل یک خط است که در آن دو عدد طبیعی $n$ و $m$ با فاصله از هم آمده است.
$$1 \le n, m \le 100$$
# خروجی
*در این بخش قالب خروجی کد کاربران توضیح داده شود.*

خروجی برنامه‌ی شما باید شامل ۲ خط باشد که در خط اول مقدار $\frac {fib(n)} m$  و در خط دوم مقدار $\frac n {fib(m)}$، هریک با دقیقاً ۶ رقم اعشار چاپ شود.

# مثال
*در اینجا چند نمونه برای فهم بهتر صورت سوال و قالب ورودی و خروجی تست‌ها داده می‌شود.*
## ورودی نمونه ۱
```
1 2
```


## خروجی نمونه ۱
```
1.000000
2.000000
```


*زیر هر نمونه، توضیحات مربوط به آن در صورت نیاز اضافه شود.*

مقدار $fib(1)$ برابر ۱ و مقدار $fib(2)$برابر ۲ می‌باشد؛ پس مقادیر خروجی برابر $\frac {1} {1}$ و $\frac {2} 1$ هستند.

## ورودی نمونه ۲
```
10 15
```


## خروجی نمونه ۲
```
5.933333
0.010131
```


مقدار $fib(10)$ برابر ۸۹ و مقدار $fib(15)$برابر ۹۸۷ می‌باشد؛ پس مقادیر خروجی برابر $\frac {89} {15}$ و $\frac {10} {987}$ هستند.

# کپشن تصاویر

برای اضافه کردن `caption` به تصاویر کافیست بشکل زیر عمل کنید:

| آدرس عکس |
|:--------:|
| *توضیحات* |
