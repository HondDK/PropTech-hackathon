import React from 'react'
import {useAppSelector} from "../hooks/useRedux";
import useFetchData from "../hooks/useFetchData";
import useRequest from "../hooks/useRequest";
import Header from "../components/UI/Header";

const RatingUserPage = () => {
  const {access_token} = useAppSelector((state) => state.loginPage);
  const BASE_URL =
      "http://206.189.61.25:8002/apartx_auth/profile/profile/employees_rating/";
  const {data, isLoading, error} = useFetchData(BASE_URL, access_token);
  const {responseData, sendRequest} = useRequest();

  return (
      <div>
        <div>
          <Header></Header>
          <main>
            <article>
              <h1>Рейтинг пользователей</h1>
              {data && data.map((item: any) =>
                  <section className={"order_block"} key={item.uuid}>
                    <p>Почта: {item.user}</p>
                    <p>Рейтинг: {item.rating}</p>
                  </section>
              )}
            </article>
          </main>
        </div>
      </div>
  )
}

export default RatingUserPage
