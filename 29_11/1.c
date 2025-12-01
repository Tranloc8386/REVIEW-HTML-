
#include <stdio.h>
int main(int argc, char const *argv[])
{
    char *fruits[] = {"-", "+", "/"};

    for (int i = 0; i < 3; i++)
    {
        printf("%p\n", fruits[i]);
    }
    return 0;
}
