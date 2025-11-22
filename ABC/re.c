#include <stdio.h>

int day_months[13] = {0, 30, 28, 90, 23, 32, 23, 23, 544, 23, 43, 34, 83};
int totals(int n)
{
    if (n == 1)
    {
        return day_months[1];
    }
    else

        return day_months[n] + totals(n - 1);
}
int main(int argc, char const *argv[])
{
    int n;
    printf("Nhap thang: ");
    scanf("%d", &n);
    if (n < 1 || n > 12)
    {
        printf("Thang khong hop le!");
    }
   
        int sum = totals(n);
    
    printf("Tong so ngay tu thang 1 den thang %d la: %d ngay", n, sum);
    return 0;
}
