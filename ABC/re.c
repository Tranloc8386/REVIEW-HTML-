#include <stdio.h>

// Mảng số ngày của 12 tháng (năm thường, không nhuận)
int days_in_month[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

// Hàm kiểm tra ngày hợp lệ
int laNgayHopLe(int ngay, int thang)
{
    if (thang < 1 || thang > 12)
        return 0;
    if (ngay < 1 || ngay > days_in_month[thang])
        return 0;
    return 1; // hợp lệ
}

// Hàm đệ quy tính tổng ngày từ tháng 1 đến hết tháng (thang-1)
int tongNgayDenHetThangTruoc(int thang)
{
    if (thang == 1)
    {
        return 0;
    } // trước tháng 1 không có ngày nào
    else

    {
        return days_in_month[thang - 1] + tongNgayDenHetThangTruoc(thang - 1);
    }
}

int main()
{
    int ngay, thang;

    printf("=== CHUONG TRINH TINH TONG NGAY TU 1/1 DEN NGAY BAN CHON ===\n");
    printf("Nhap ngay: ");
    scanf("%d", &ngay);
    printf("Nhap thang: ");
    scanf("%d", &thang);

    // Kiểm tra hợp lệ
    if (!laNgayHopLe(ngay, thang))
    {
        printf("Ngay khong hop le! (Vi du: 30/2, 32/4, 15/13 la sai)\n");
        return 0;
    }

    // Tính tổng
    int tongNgay = tongNgayDenHetThangTruoc(thang) + ngay;

    // In kết quả đẹp
    printf("\nKet qua:\n");
    printf("Tu ngay 1/1 den ngay %d/%d cung nam\n", ngay, thang);
    printf("=> Tong cong: %d ngay\n", tongNgay);

    // Bonus: In ra ngày thứ bao nhiêu trong năm
    printf("(Day la ngay thu %d trong nam)\n", tongNgay);

    return 0;
}