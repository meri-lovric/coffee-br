#include <stdio.h>
int main(int argc, char* argv[]){
    
    int i,n;
    char c;
    while ( c == '\n'){
        i = rand() % 14 + 1;
        switch(i){
            case 1:
                n = rand() % 3 + 1;
                printf("%d.%d",i,n);
                break;
            case 2:
                n = rand() % 2 + 1;
                printf("%d.%d",i,n);
                break;
            case 3:
                n = rand() % 3 + 1;
                printf("%d.%d",i,n);
                break;
            case 4:
                n = rand() % 5 + 1;
                printf("%d.%d",i,n);
                break;
            case 5:
                n = rand() % 4 + 1;
                printf("%d.%d",i,n);
                break;
        }
        scanf("%c", &c);
    }
    return 0;
}