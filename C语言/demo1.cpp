# include <stdio.h>

//两数相加 
//int main()
//{
//	int a,b,sum;
//	a=123;
//	b=456;
//	sum=a+b;
//	printf("sum is %d\n",sum);
//	return 0;
//} 
//浮点数
//int main()
//{
//	float a,b,sum;
//	scanf("%f,%f",&a,&b);
//	sum=a+b;
//	printf("%f+%f=%.2f\n",a,b,sum);
//	return 0;
//} 

//两数比大 
//int max(int x,int y); 
//int main(void)
//{
//	int a,b,c;
//	//scanf 输入函数 
//	scanf("%d,%d",&a,&b);
//	c=max(a,b);
//	//printf 输出函数 
//	printf("max=%d\n",c);
////	return 0;
//}
//
//int max(int x,int y)
//{
//	int z;
//	if(x>y)
//		z=x;
//	else
//		z=y;
//	return z;	 
//} 

//int main(void)
//{
//	printf("****** \n");
//	printf("   ****** \n");
//	printf("      ****** \n");
//	printf("         ****** \n");
// } 

int max(int a,int b,int c);
int main(void)
{
	int a,b,c,maxNum;
	scanf("%d,%d,%d",&a,&b,&c);
	maxNum = max(a,b,c);
	printf("max=%d\n",maxNum);
	
}

int max(int a,int b,int c)
{
	int temp;
	temp = a;
	if(b > c)
		if(b > a)
			temp = b;
	else if(c > a)
		 temp = c;
	
	return temp;
	
}

