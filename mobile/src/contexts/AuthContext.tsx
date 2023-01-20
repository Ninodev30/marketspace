import { createContext, ReactNode, useState } from 'react';
import AdTypeProps from 'src/@types/ad';
import AdTradeTypeProps from 'src/@types/adTrade';
import PaymentMethodsTypes from 'src/@types/paymentMethods';

export type AuthContextDataProps = {
    user: any;
    filter: {
        isShowFilter: boolean;
        setIsShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    };
    filterOptions: AdTradeTypeProps;
    adData: AdTypeProps;
    methods: {
        handleTrade: {
            condition: (select: boolean) => void;
            switch: () => void;
            payment: (paymentMethod: PaymentMethodsTypes) => void;
        };
        handleAdData: {
            handleTrade: {
                condition: (select: boolean) => void;
                switch: () => void;
                payment: (paymentMethod: PaymentMethodsTypes) => void;
            };
        };
    };
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState('test');
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<AdTradeTypeProps>({
        used: false,
        switch: false,
        payment: {
            bankSlip: false,
            pix: false,
            money: false,
            creditCard: false,
            bankDeposit: false
        }
    });
    const [adData, setAdData] = useState<AdTypeProps>({
        ad: {
            used: false,
            switch: false,
            payment: {
                bankSlip: false,
                pix: false,
                money: false,
                creditCard: false,
                bankDeposit: false
            }
        },
        title: '',
        description: '',
        price: 10,
        adPhotos: [
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEA8QDQ4QDw4QEA4QDhAQEBANEA8NFREXFhURFRMkHCgiGRslGxMWIj0jJzUrLi4uGB82RDMsNygtLisBCgoKDg0OGRAQGislHSUtLy0tLS0tLSsyLS0tLSstLS8tLS0tOC4rLS0tLSsuLS8tMistLS0tLS0tKy01LS0rLf/AABEIAKkBKgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAPBAAAgECBAIHBAgGAgMAAAAAAAECAxEEEiExQVEFEyIyYXGBM0JysyNSYnORobGyFFOCktHhNMEkQ6L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAAEFAQAAAAAAAAAAAAABEQIDEiExQVH/2gAMAwEAAhEDEQA/APmoAO7mAAAAAAAAAEoAkWSCRZIoJEpEpFkiiEiUiyRNgitibFrE2KKWFi9hYDOxFjSwUW9Em3ySuwMmiGjWWWPekr8o9t/4/O5E4W8dmnzTV0/wYxJWLRVo1aKtGWmTRBo0UaAgAEAAAAAAAAAAAAAAAAAAAAAALpEJFkiiUiyQSLpFQSLJBIskUQkWSJSLJAVsTYvCDk7JNvkldmnVpd+SXhG03+O35+hcZtkYWNIYeTV7Wj9aXZXpz9LlMJXlUnlpw191JdZNvhbTfySOmvCcZWqxnGTV+2mpNc9fIsw8qxpQW95v+yP+X+Rz9JVuyoK0Yt3cYrKnba/P15G9zzsZO834aC+iTywO6a7vwUv2ROE9CS0j8FL9kTM9L9YtFWjVoo0RWbRRo1aKNEVmyCzRUgAAAAAAAAAAAAAAAAAAASiCUBZF0VRdFFki6RVIukVEpF0iG1FOUr2Vlpu29l+T18DCeMl7iUPHvS/u4eljSb+OpqyvJqK4OWl14Ld+hjPFxXdTk+cuzH8N3+Rxttu7d2929WyCd34Z+vUwaqVlLtJQTWZuUaVOPK/N6PTVuz3saVpUacXdyrS2sr0qV/N9qS8LQfiRhor+HqJu1quG5v3K+xi6bnaNKCk72TnKMbytooxbSb301LlqWzi1wuIqShJQSp03pKNNdXBxta05by499s3xStCgrp/RS229vU0MMRSlBQu5NOOjcXCKd2mkv6b8NOBfEvsUPu5/PqFzPCTl3TWTlZN8tTzG7nZiZWj56HGTksQek1pH4KX7Eecek9o/BS/YhPR9ZtFGjVoo0Rpm0UZoyjIM2ijNGUZFVABAAAAAAAAAAAAAAAAALIqXRRZF0VReJUXRpCLevBbt6Jeb2R0RoRiottSzRT01aulo7qyevKV/A2pSbfYi7pPu3ckvi1cVttZHXj0/1x5dX8jmr4a0H1jcFmi725XVsu773K2m55lSGV232aa2aaun+DPS6QypJSmrt3cYdp6c5bfhfyODE97TbLTtd3fs48SdTjIdO23yyLQV2ipekc3V6NN/QVfvsN8uud3RKjp3JNtZG55ZOTj9JBNawslHz15q3mwf0FX77DfLrnPQqyScU9HurK7b3131svM6cOfZy1z6vTvU4Zr1OlK92ksyvGOfPeMm4uSV4va+/N3uY4l9jD/dz+fUOWVNxV3pra3FO19VwN8S+xh/up/PqDlyvLltXhxnHjkceJlqlyMSZu7ZBloPUtpD7ul+xHlnq8Ifd0v2IvxPrNlGaMoyNM2UkaMpIyrNlGaMoyKzBLIIAAAAAAAAAAAAAAAABdFUWRRoi8SiLxKj0M8VGF45nZbtqNsseC1/M7sJhXWjFznaLTlGLUaVKUs0oqGa+km4vg9OJ5dZ6Q+FeHuo9yl0jCFO95RjKFXJnSyNOduocUm3FZE7q27v3j1cM3y8HW7pxnb7teB01SUajyuOVNwtFzajUil1kdddJS8fM46+6+Cn8uJpj8Q6tSU273trqk3btNLheV36mdfdfBT+XE488tuPT05ZJvvGZaLKhMy6OtP/AMer9/hvl4g0w7qZIxSUVZtSe7u73/P9TKnrQqJbuvhbLx6vEFWpWtUnlS9293svc4PRb2EuWpymyL1rcZ5539EvM0xUvo8P91P59Q5utjHux/qnZ/8AzsvW50dJZ1HDqopKXVSupJxaTrVGtOCtZ+TQ3yeccIBoqL3laC4OWl1zS3foXEtZnrLaH3dL9iPNzQWyc3zl2V/anf8AP0Oqhi1KynaL0SlZKNlok1w89v1Gz0efbVlGaTVtGZsjakijLyKMis2UZozNmVUZBLIIAAAAAAAAAAAAAAAABdFC6KLo0iZovEqN8S9IfCv2orPDztqlG+l20RjH3Pgj+iJrqKv1lR1H2rRT0vffw/2dftcJbJMctWMU0ou+mr4Xu9vSxNfdfBT+XEmXbsqcNI3u93bnJ8P0IxCtK32aezTXs48TLf1mAArtwcJzpVoU32nUw8ms8YfRxhWUpO7XZTnG72V0Z9RSh7Spnf1KFnrbZ1X2V5xU1uZdS/etBfa0fpHf1JUoppRi5ybSWbS7eyUFu/X0JZ+k5fjop4qa0w8FSt70Lyqpc3Wesf6cq30OeSim3OWZt3aj2m3xvPb1VzupdFV6ivVapQUlG08sbTe0cmihJ3VlPJfMtdTteDwmF9q881/M71/CjZ5Xo9KkXF3jaaJ3Sel7bfbycNSq1PYU7JNRc9ElJ7J1XZRb9L3PRo9BpZniKjeV/SRh2cr37dSS7Dsn3kou6tPUriennoqUbWVoyldZU91GCbtHXuSlOOi0R5VfETqWzybUdIR2hBcoQWkVpsrGbbWpJPT18TicJCEqcKcJ3VnkinJPmq0ruDvydWLS0aueZVw6cXUotyglecXZ1KPxfWjr31ptdRbSOYvRqShJShJxlF3jJaNaW/Rteow1rQxOXsyu48PrR8vDw/Q6pbJppxezWz/34GKpwr+zUadZv2a7NOq3/L+rL7Gz922kDCnUlTb87SjJOzaezXBrXxRuX9Z9enSyjLpqSvHh3ovvR/yvH9DORKsuqMoy7KMy0oyCWQQAAAAAAAAAAAAAAAACyKkoDRF0ZouijbFwvkblGKyR1b+yuC1L9HYSNZzs3aEVKUpK6SzJZnFSVoq93JuyS2baTzq5ZqN24uKytJZr22a1QjlXdgr85duX+F6K5u+3LjLmMctScU3pDg3aEE/BbN6PbUSi5vsq6Sgm9lpFK7fBacT0MPkqZo1ZWcsrhOV5KM1fWS4rX/vW2V8ONpVacstXxcLezlHbNDhbT0d07NNF2SGW3FMsV3pXfKH/AHLb8Lm+Fo1avsKdlmUc6tFZ3a0XVbspO60TV77HT0LLD3y1aadTtOMpyi4vTSCg+xdtNdvR370Glm1xvTtS7hCn1bWaEusTcktnTyPaOr7E86V9LWRi8r8b7Z9Xo9BxinLEVbqL7Sg1TSlvllUlbLPVdmajfMrSLvpPD4dZcPBSdmm6acFLh35JtrfsSVRaq0lY8OvXnUadScptKyzNvKuS5LwWhmTF134jpatPaXVqzilTzRai3dxztuWXXu3y+BwJEguJqCQdmE6MrVrOMGotOSlJNKUVvKKtmmvhTKOMvSpSqSy04ynJ3ajCLnJryWp6X8NhaHtqvXz4wpawv5prMt9c0ZLTslK3SUKkXSdLqqD4UpPOpXupSissKlvFJtJdpPUDneFhD21WK5wp2xE9+NmoLjvK65EY7FKrltBrKrOcpdZVqLhnnZKVkrLS9tLuytTEYZ07O6lCV+rqRu4TS3txTV1eLs1daaoxLiJjJxaabTWzWjR0Rmp8oz5bRl5cn4beWxzpXaS1baSS1bb2SR3LoucdcRKOHW9ql3Va8KK7V/iyrXcrNcstNHo+PgyjN8VKN0oOUlGOXNNKMpavW13bRpWu9EjnZiukvhUAGVAAAAAAAAAAAAAAAAAABdMsmZom5RfMOsMZyMXMo7Y1TtoYxOPV1o9ZSbva9pRdrZoy4O36Jaq6fjwkdEWWVmzXTjMC4LPTl1lBtJTWji3tGa91+Oz87pRCvGoowr3tFZYVUs06ceEZL34LluuDssryo4udF3g901KLSlGUXupRejXgdCowxN5YZZaiV54a7lLxdJ7yX2d/O9lcTc9uevh5U2s1mpJuE4vNCpG9s0ZcV+aejSd0ZG2HxOROLSqUpNSlTbsm7WzRfuyt7y8ndXT0c6Ee7CpVetutapQiuTjF3k/FSj5EVhRozqSy04SnK18sIubtzsuB30Oi1lz1q9OnTUsrcZRrPNa+W6dm7fVzSV1eJyV8XUqLK5Wp3v1cEqdO/PIrJvxeviVw+IlTvazjJJThJZoTSd0pLw4NWa3TT1GJr0P43D0f+PRzzX/sqt7+HHe7Uo9W9tDjxePq1r9ZNtSd5RVoxk+DlFd57au70WpNTDxmpToXcYrNUpyd6lJcZX9+H2ltxS0b5oRcmlFNybtFJXbfJLiWQ1AOqphFS1xVWGH45JfSV2vCitU9u9lOSp0vShph8Pnf83E2n/bRXZS+LNuXE9+nd0dCs1J06anRelXrGoUHbbNNtKMlfR3UlfTcriJ4KlLSrUxGi7FK0YxfJ12u0uF4x1vw2PExeMrYlp16s6lu6pPsxXKMdo78CKcBq9t+vbj0vNJqhGGHi1Z9UmptcpVW3NrwvbwMFK5y00boxa1JIs2VYbIIoACAAAAAAAAAAAAAAAAAAAAAArJFMhqWSKM4QNoxCRdFRnOByzg07ptNaprRp+Z3mU4F0bU8bDE6YiSpV+GIelOq+VZcJfbXqno1nXoTpScakXGStdO2z2aezT5rRnJVpG2F6QcIqlXg61CN8iUstSi3/LnZ2X2XdPweprWbM9JN8Pg6lROUY2pq96k3GnSVt71G1G/he5hU6Wpw/wCPhlf+ZiWsQ14KnZQ/FPj6edi8TWxEs1erOo1tmbaS5JbL0CSWvXeMw2Hakqs69WLvH+Hbo04yWz65rM/6UuOpy4rp6vUzKkqeFhPvRw0FRclylPvNb6XtrscEKJtCiNa7Z9c0aX57+LNoUTqjRNY0zOtOaNE1jSN1EWIKKJJLIIIABAAAAAAAAAAAAAAAAAAAAAAAAALJlQBomSmZpkplGtwUTJuBEonPOmdJDRdHC6JaNE6spKiNGMaRqoFkSNEWJIuQ2QS2VbIbIAkgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm5NyoAtcm5QkotcXKgC1yLkMgCbkAEAAAAAAAAAAAAAAAAAAAf/9k='
            , 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEA8QDQ4QDw4QEA4QDhAQEBANEA8NFREXFhURFRMkHCgiGRslGxMWIj0jJzUrLi4uGB82RDMsNygtLisBCgoKDg0OGRAQGislHSUtLy0tLS0tLSsyLS0tLSstLS8tLS0tOC4rLS0tLSsuLS8tMistLS0tLS0tKy01LS0rLf/AABEIAKkBKgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAPBAAAgECBAIHBAgGAgMAAAAAAAECAxEEEiExQVEFEyIyYXGBM0JysyNSYnORobGyFFOCktHhNMEkQ6L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAAEFAQAAAAAAAAAAAAABEQIDEiExQVH/2gAMAwEAAhEDEQA/APmoAO7mAAAAAAAAAEoAkWSCRZIoJEpEpFkiiEiUiyRNgitibFrE2KKWFi9hYDOxFjSwUW9Em3ySuwMmiGjWWWPekr8o9t/4/O5E4W8dmnzTV0/wYxJWLRVo1aKtGWmTRBo0UaAgAEAAAAAAAAAAAAAAAAAAAAAALpEJFkiiUiyQSLpFQSLJBIskUQkWSJSLJAVsTYvCDk7JNvkldmnVpd+SXhG03+O35+hcZtkYWNIYeTV7Wj9aXZXpz9LlMJXlUnlpw191JdZNvhbTfySOmvCcZWqxnGTV+2mpNc9fIsw8qxpQW95v+yP+X+Rz9JVuyoK0Yt3cYrKnba/P15G9zzsZO834aC+iTywO6a7vwUv2ROE9CS0j8FL9kTM9L9YtFWjVoo0RWbRRo1aKNEVmyCzRUgAAAAAAAAAAAAAAAAAAASiCUBZF0VRdFFki6RVIukVEpF0iG1FOUr2Vlpu29l+T18DCeMl7iUPHvS/u4eljSb+OpqyvJqK4OWl14Ld+hjPFxXdTk+cuzH8N3+Rxttu7d2929WyCd34Z+vUwaqVlLtJQTWZuUaVOPK/N6PTVuz3saVpUacXdyrS2sr0qV/N9qS8LQfiRhor+HqJu1quG5v3K+xi6bnaNKCk72TnKMbytooxbSb301LlqWzi1wuIqShJQSp03pKNNdXBxta05by499s3xStCgrp/RS229vU0MMRSlBQu5NOOjcXCKd2mkv6b8NOBfEvsUPu5/PqFzPCTl3TWTlZN8tTzG7nZiZWj56HGTksQek1pH4KX7Eecek9o/BS/YhPR9ZtFGjVoo0Rpm0UZoyjIM2ijNGUZFVABAAAAAAAAAAAAAAAAALIqXRRZF0VReJUXRpCLevBbt6Jeb2R0RoRiottSzRT01aulo7qyevKV/A2pSbfYi7pPu3ckvi1cVttZHXj0/1x5dX8jmr4a0H1jcFmi725XVsu773K2m55lSGV232aa2aaun+DPS6QypJSmrt3cYdp6c5bfhfyODE97TbLTtd3fs48SdTjIdO23yyLQV2ipekc3V6NN/QVfvsN8uud3RKjp3JNtZG55ZOTj9JBNawslHz15q3mwf0FX77DfLrnPQqyScU9HurK7b3131svM6cOfZy1z6vTvU4Zr1OlK92ksyvGOfPeMm4uSV4va+/N3uY4l9jD/dz+fUOWVNxV3pra3FO19VwN8S+xh/up/PqDlyvLltXhxnHjkceJlqlyMSZu7ZBloPUtpD7ul+xHlnq8Ifd0v2IvxPrNlGaMoyNM2UkaMpIyrNlGaMoyKzBLIIAAAAAAAAAAAAAAAABdFUWRRoi8SiLxKj0M8VGF45nZbtqNsseC1/M7sJhXWjFznaLTlGLUaVKUs0oqGa+km4vg9OJ5dZ6Q+FeHuo9yl0jCFO95RjKFXJnSyNOduocUm3FZE7q27v3j1cM3y8HW7pxnb7teB01SUajyuOVNwtFzajUil1kdddJS8fM46+6+Cn8uJpj8Q6tSU273trqk3btNLheV36mdfdfBT+XE488tuPT05ZJvvGZaLKhMy6OtP/AMer9/hvl4g0w7qZIxSUVZtSe7u73/P9TKnrQqJbuvhbLx6vEFWpWtUnlS9293svc4PRb2EuWpymyL1rcZ5539EvM0xUvo8P91P59Q5utjHux/qnZ/8AzsvW50dJZ1HDqopKXVSupJxaTrVGtOCtZ+TQ3yeccIBoqL3laC4OWl1zS3foXEtZnrLaH3dL9iPNzQWyc3zl2V/anf8AP0Oqhi1KynaL0SlZKNlok1w89v1Gz0efbVlGaTVtGZsjakijLyKMis2UZozNmVUZBLIIAAAAAAAAAAAAAAAABdFC6KLo0iZovEqN8S9IfCv2orPDztqlG+l20RjH3Pgj+iJrqKv1lR1H2rRT0vffw/2dftcJbJMctWMU0ou+mr4Xu9vSxNfdfBT+XEmXbsqcNI3u93bnJ8P0IxCtK32aezTXs48TLf1mAArtwcJzpVoU32nUw8ms8YfRxhWUpO7XZTnG72V0Z9RSh7Spnf1KFnrbZ1X2V5xU1uZdS/etBfa0fpHf1JUoppRi5ybSWbS7eyUFu/X0JZ+k5fjop4qa0w8FSt70Lyqpc3Wesf6cq30OeSim3OWZt3aj2m3xvPb1VzupdFV6ivVapQUlG08sbTe0cmihJ3VlPJfMtdTteDwmF9q881/M71/CjZ5Xo9KkXF3jaaJ3Sel7bfbycNSq1PYU7JNRc9ElJ7J1XZRb9L3PRo9BpZniKjeV/SRh2cr37dSS7Dsn3kou6tPUriennoqUbWVoyldZU91GCbtHXuSlOOi0R5VfETqWzybUdIR2hBcoQWkVpsrGbbWpJPT18TicJCEqcKcJ3VnkinJPmq0ruDvydWLS0aueZVw6cXUotyglecXZ1KPxfWjr31ptdRbSOYvRqShJShJxlF3jJaNaW/Rteow1rQxOXsyu48PrR8vDw/Q6pbJppxezWz/34GKpwr+zUadZv2a7NOq3/L+rL7Gz922kDCnUlTb87SjJOzaezXBrXxRuX9Z9enSyjLpqSvHh3ovvR/yvH9DORKsuqMoy7KMy0oyCWQQAAAAAAAAAAAAAAAACyKkoDRF0ZouijbFwvkblGKyR1b+yuC1L9HYSNZzs3aEVKUpK6SzJZnFSVoq93JuyS2baTzq5ZqN24uKytJZr22a1QjlXdgr85duX+F6K5u+3LjLmMctScU3pDg3aEE/BbN6PbUSi5vsq6Sgm9lpFK7fBacT0MPkqZo1ZWcsrhOV5KM1fWS4rX/vW2V8ONpVacstXxcLezlHbNDhbT0d07NNF2SGW3FMsV3pXfKH/AHLb8Lm+Fo1avsKdlmUc6tFZ3a0XVbspO60TV77HT0LLD3y1aadTtOMpyi4vTSCg+xdtNdvR370Glm1xvTtS7hCn1bWaEusTcktnTyPaOr7E86V9LWRi8r8b7Z9Xo9BxinLEVbqL7Sg1TSlvllUlbLPVdmajfMrSLvpPD4dZcPBSdmm6acFLh35JtrfsSVRaq0lY8OvXnUadScptKyzNvKuS5LwWhmTF134jpatPaXVqzilTzRai3dxztuWXXu3y+BwJEguJqCQdmE6MrVrOMGotOSlJNKUVvKKtmmvhTKOMvSpSqSy04ynJ3ajCLnJryWp6X8NhaHtqvXz4wpawv5prMt9c0ZLTslK3SUKkXSdLqqD4UpPOpXupSissKlvFJtJdpPUDneFhD21WK5wp2xE9+NmoLjvK65EY7FKrltBrKrOcpdZVqLhnnZKVkrLS9tLuytTEYZ07O6lCV+rqRu4TS3txTV1eLs1daaoxLiJjJxaabTWzWjR0Rmp8oz5bRl5cn4beWxzpXaS1baSS1bb2SR3LoucdcRKOHW9ql3Va8KK7V/iyrXcrNcstNHo+PgyjN8VKN0oOUlGOXNNKMpavW13bRpWu9EjnZiukvhUAGVAAAAAAAAAAAAAAAAAABdMsmZom5RfMOsMZyMXMo7Y1TtoYxOPV1o9ZSbva9pRdrZoy4O36Jaq6fjwkdEWWVmzXTjMC4LPTl1lBtJTWji3tGa91+Oz87pRCvGoowr3tFZYVUs06ceEZL34LluuDssryo4udF3g901KLSlGUXupRejXgdCowxN5YZZaiV54a7lLxdJ7yX2d/O9lcTc9uevh5U2s1mpJuE4vNCpG9s0ZcV+aejSd0ZG2HxOROLSqUpNSlTbsm7WzRfuyt7y8ndXT0c6Ee7CpVetutapQiuTjF3k/FSj5EVhRozqSy04SnK18sIubtzsuB30Oi1lz1q9OnTUsrcZRrPNa+W6dm7fVzSV1eJyV8XUqLK5Wp3v1cEqdO/PIrJvxeviVw+IlTvazjJJThJZoTSd0pLw4NWa3TT1GJr0P43D0f+PRzzX/sqt7+HHe7Uo9W9tDjxePq1r9ZNtSd5RVoxk+DlFd57au70WpNTDxmpToXcYrNUpyd6lJcZX9+H2ltxS0b5oRcmlFNybtFJXbfJLiWQ1AOqphFS1xVWGH45JfSV2vCitU9u9lOSp0vShph8Pnf83E2n/bRXZS+LNuXE9+nd0dCs1J06anRelXrGoUHbbNNtKMlfR3UlfTcriJ4KlLSrUxGi7FK0YxfJ12u0uF4x1vw2PExeMrYlp16s6lu6pPsxXKMdo78CKcBq9t+vbj0vNJqhGGHi1Z9UmptcpVW3NrwvbwMFK5y00boxa1JIs2VYbIIoACAAAAAAAAAAAAAAAAAAAAAArJFMhqWSKM4QNoxCRdFRnOByzg07ptNaprRp+Z3mU4F0bU8bDE6YiSpV+GIelOq+VZcJfbXqno1nXoTpScakXGStdO2z2aezT5rRnJVpG2F6QcIqlXg61CN8iUstSi3/LnZ2X2XdPweprWbM9JN8Pg6lROUY2pq96k3GnSVt71G1G/he5hU6Wpw/wCPhlf+ZiWsQ14KnZQ/FPj6edi8TWxEs1erOo1tmbaS5JbL0CSWvXeMw2Hakqs69WLvH+Hbo04yWz65rM/6UuOpy4rp6vUzKkqeFhPvRw0FRclylPvNb6XtrscEKJtCiNa7Z9c0aX57+LNoUTqjRNY0zOtOaNE1jSN1EWIKKJJLIIIABAAAAAAAAAAAAAAAAAAAAAAAAALJlQBomSmZpkplGtwUTJuBEonPOmdJDRdHC6JaNE6spKiNGMaRqoFkSNEWJIuQ2QS2VbIbIAkgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAm5NyoAtcm5QkotcXKgC1yLkMgCbkAEAAAAAAAAAAAAAAAAAAAf/9k='
,            'data:image/jpeg;base64,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'

        ],
        user: {
            name: '',
            photo: ''
        }
    });

    const methods = {
        handleTrade: {
            condition: (select: boolean) => setFilterOptions(prevState => ({
                ...prevState,
                used: select
            })),
            switch: () => setFilterOptions(prevState => ({
                ...prevState,
                switch: !prevState.switch
            })),
            payment: (paymentMethod: PaymentMethodsTypes) => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    [paymentMethod]: !prevState.payment[paymentMethod]
                }
            }))
        },
        handleAdData: {
            handleTrade: {
                condition: (select: boolean) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        used: select
                    }
                })),
                switch: () => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        switch: !prevState.ad.switch
                    }
                })),
                payment: (paymentMethod: PaymentMethodsTypes) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        payment: {
                            ...prevState.ad.payment,
                            [paymentMethod]: !prevState.ad.payment[paymentMethod]
                        }
                    }
                }))
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                filter: {
                    isShowFilter,
                    setIsShowFilter
                },
                adData,
                filterOptions,
                methods
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;