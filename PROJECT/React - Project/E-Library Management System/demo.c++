

// #include <iostream>
// using namespace std;

// class demo
// {
//     int a, b;

// public:
//     demo()
//     {
//     }

//     demo(int n, int m)
//     {
//         a = n;
//         b = m;
//     }

//     int aset(int n)
//     {
//         return a = n;
//     }

//     void getdata()
//     {
//         cout << "\t" << a;
//     }
// };

// int main()
// {
//     demo obj, obj1(10, 20);
//     obj1.aset(60);
//     obj1.getdata();

//     return 0;
// }

#include <iostream>
using namespace std;

class bank
{
    int balance = 1500;

public:
   bank(){}

    bank(int value)
    {
        balance = value;
        cout  << balance;
    }

    void deposit(int amt)
    {
        balance += amt;
        cout << "\nDeposited: " << amt;
    }

    void withdraw(int amt)
    {
        if (amt <= balance)
            balance -= amt;
            cout << "\nWithdrawn: " << amt;
      
    }

    void getdata()
    {
        cout << "\nCurrent Balance: " << balance;
    }
};

int main()
{
    bank abhi(1000);

    int choice, amount;

    do
    {
        cout << "\n\n--- Bank Menu ---";
        cout << "\n1. Deposit";
        cout << "\n2. Withdraw";
        cout << "\n3. Display Balance";
        cout << "\n4. Exit";
        cout << "\nEnter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter amount to deposit: ";
            cin >> amount;
            abhi.deposit(amount);
            break;

        case 2:
            cout << "Enter amount to withdraw: ";
            cin >> amount;
            abhi.withdraw(amount);
            break;

        case 3:
            abhi.getdata();
            break;

        case 4:
            cout << "Exiting... Thank you!";
            break;

        default:
            cout << "Invalid choice! Please try again.";
        }
    } while (choice != 4);

    return 0;
}
