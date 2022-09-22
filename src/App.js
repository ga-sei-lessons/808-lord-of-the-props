import React, { Component } from 'react'
import Movie from './Movie'

const oneArrayToRuleThemAll = [
  {
    title: 'The Fellowship of the Ring',
    hours: 2,
    minutes: 58,
  },
  {
    title: 'The Two Towers',
    hours: 2,
    minutes: 59,
  },
  {
    title: 'The Return of the King',
    hours: 3,
    minutes: 21,
  }
]

const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

const myMap = (array, callback) => {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    const callbackReturn = callback(array[i], i, array)
    newArray.push(callbackReturn)
  }

  return newArray
}

const fruits = ['banana', 'mango', 'kiwi', 'lychee']

myForEach(fruits, (fruit, i, fruitArray) => {
  console.log(i, fruit, fruitArray)
})

const favFruits = myMap(fruits, (fruit, i) => {
  return `i like fruit ${fruit}, it is at index ${i}`
})

console.log(favFruits)

export default class App extends Component {
  render() {

    const movies = oneArrayToRuleThemAll.map((movie, i) => {
      console.log(`index ${i}:`, movie, `movie${i}`)
      return (
        <Movie 
          title={movie.title}
          hours={movie.hours}
          minutes={movie.minutes}
          key={`movie${i}`}
        />
      )
    })

    // const movies = []

    // oneArrayToRuleThemAll.forEach((movie, i) => {
    //   movies.push(<Movie 
    //     title={movie.title}
    //     hours={movie.hours}
    //     minutes={movie.minutes}
    //     key={`movie${i}`}
    //   />)
    // })
    console.log(movies)
    return (
      <div>
        <h1>Lord of the Props</h1>

        {movies}

        {/* <Movie /> */}
      </div>
    )
  }
}