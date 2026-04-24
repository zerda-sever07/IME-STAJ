<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = \App\Models\Book::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3), // 3 kelimelik başlık
            'author' => $this->faker->name(),     // Rastgele isim
            'pages' => $this->faker->numberBetween(50, 500), // 50-500 sayfa
        ];
    }
}
